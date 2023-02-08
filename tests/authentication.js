const {expect} = require('chai')
const { login } = require("../helpers/general-helper")


describe('Authorization tests', () => {
    describe('Authorization with valid credentials', () => {
        // declare variable to assign the API call response
        let res

        // hook to be executed before all tests
        before(async () => {

            // login function imported from general-helper to avoid repeating the code in further tests
            // perform API call
            res = await login(process.env.EMAIL, process.env.PASSWORD)
        })

        it('check response status code', () => {
            expect(res.statusCode).to.eq(200)
        });
        it('check response has a token', () => {
            expect(res.body.data.session.token).to.be.a('string')
        });
        it('check response has a list of permissions', () => {
            expect(res.body.data.permissions).to.be.an('array')
        });
        it('check the list of permissions is not empty', () => {
            expect(res.body.data.permissions).to.have.length.above(0)
        });
    });

    describe('Authorization with invalid credentials', () => {
        // declare variable to assign the API call response
        let res

        // hook to be executed before all tests
        before(async () => {

            // login function imported from general-helper to avoid repeating the code in further tests
            // perform API call
            res = await login("test@email.com", 'Qw123123')
        })

        it('check response status code', () => {
            expect(res.statusCode).to.eq(400)
        });
        it('check response message', () => {
            expect(res.body.data.message).to.eq('Invalid login credentials')
        });
        it('check response has a code property', () => {
            expect(res.body.data.code).to.be.an('number')
        });
    });

    describe('Authorization with empty data', () => {
        // declare variable to assign the API call response
        let res

        // hook to be executed before all tests
        before(async () => {

            // login function imported from general-helper to avoid repeating the code in further tests
            // perform API call
            res = await login("", '3')
        })

        it('check response status code', () => {
            expect(res.statusCode).to.eq(400)
        });
        it('check response message', () => {
            expect(res.body.data.message).to.eq('Invalid login credentials')
        });
        it('check response has a code property', () => {
            expect(res.body.data.code).to.be.an('number')
        });
    });
});
