const request = require('supertest');
const {expect} = require('chai')


describe('Get Emails List tests', () => {
    describe('Get Emails List from practice id 2 without authorization', () => {

        // declare variable to assign the API call response
        let res

        // hook to be executed before all tests
        before(async () => {

            // perform API call
            res = await request(process.env.BASE_URL)
                .get('clinics/2/emails')
        })
        it('check response status code', () => {
            expect(res.statusCode).to.eq(401)
        });
        it('check response message text', () => {
            expect(res.body.data.message).to.eq('You need to be authorized for this action.')
        });
    });

    describe('Get Emails List from practice id 2 after authorization', () => {

        // declare variable to assign the API call response
        let res

        // hook to be executed before all tests
        before(async () => {

            // perform API call
            res = await request(process.env.BASE_URL)
                .get('clinics/2/emails')
                .set('Authorization', `bearer ${process.env.TOKEN}`)
        })
        it('check response status code', () => {
            expect(res.statusCode).to.eq(400)
        });
        it('check response message text', () => {
            expect(res.body.data.message).to.eq('An error happened')
        });
        it('check response error text', () => {
            expect(res.body.data.error).to.eq('Error: User does not have permissions')
        });
    });


// based on provided information it is unclear if user should be prevented from getting the list of emails of practice id 1,
// but I couldn't resist to check it
    describe('Get Emails List from practice id 1 without authorization', () => {

        // declare variable to assign the API call response
        let res

        // hook to be executed before all tests
        before(async () => {

            // perform API call
            res = await request(process.env.BASE_URL)
                .get('clinics/2/emails')
        })
        it('check response status code', () => {
            expect(res.statusCode).to.eq(401)
        });
        it('check response message text', () => {
            expect(res.body.data.message).to.eq('You need to be authorized for this action.')
        });
    });

    describe('Get Emails list from practice id 1 after authorisation', () => {

        // declare variable to assign the API call response
        let res

        // hook to be executed before all tests
        before(async () => {

            // perform API call
            res = await request(process.env.BASE_URL)
                .get('clinics/1/emails')
                .set('Authorization', `bearer ${process.env.TOKEN}`)
        })
        it('check response status code', () => {
            expect(res.statusCode).to.eq(400)
        });
        it('check response message text', () => {
            expect(res.body.data.message).to.eq('An error happened')
        });
        it('check response error text', () => {
            expect(res.body.data.error).to.eq('Error: User does not have permissions')
        });
    });
});
