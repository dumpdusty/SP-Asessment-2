const request = require('supertest');
const {expect} = require('chai')


describe('Get Clinic by name tests', () => {
    describe('Get Clinic By Name without authorization', () => {

        // declare variable to assign the API call response
        let res

        // hook to be executed before all tests
        before(async () => {

            // perform API call
            res = await request(process.env.BASE_URL)
                .get('clinics?term=veterinary')
        })

        it('check response status code', () => {
            expect(res.statusCode).to.eq(401)
        });
        it('check response message', () => {
            expect(res.body.data.message).to.eq('You need to be authorized for this action.')
        });
    });

    describe('Get Clinic By Name after authorization', () => {

        // declare variable to assign the API call response
        let res

        // hook to be executed before all tests
        before(async () => {

            // perform API call
            res = await request(process.env.BASE_URL)
                .get('clinics?term=veterinary')
                .set('Authorization', `bearer ${process.env.TOKEN}`)
        })
        it('check response status code', () => {
            expect(res.statusCode).to.eq(200)
        });
        it('check response message', () => {
            expect(res.body.ok).to.eq(true)
        });
        it('check response contains array of clinic names', () => {
            expect(res.body.data).to.be.an('array')
        });

    })

    describe('Get Clinic By Name without any term value', () => {

        // declare variable to assign the API call response
        let res

        // hook to be executed before all tests
        before(async () => {

            // perform API call
            res = await request(process.env.BASE_URL)
                .get('clinics')
                .set('Authorization', `bearer ${process.env.TOKEN}`)
        })
        it('check response status code', () => {
            expect(res.statusCode).to.eq(422)
        });
        it('check response ok', () => {
            expect(res.body.ok).to.eq(false)
        });
        it('check response error message', () => {
            expect(res.body.error).to.eq('term is a required parameter for this action')
        });
    });
    describe('Get Clinic By Name with incorrect data', () => {

        // declare variable to assign the API call response
        let res

        // hook to be executed before all tests
        before(async () => {

            // perform API call
            res = await request(process.env.BASE_URL)
                .get('clinics?term=1')
                .set('Authorization', `bearer ${process.env.TOKEN}`)
        })
        it('check response status code', () => {
            expect(res.statusCode).to.eq(200)
        });
        it('check response ok', () => {
            expect(res.body.ok).to.eq(true)
        });
        it('check response contains array s', () => {
            expect(res.body.data).to.be.an('array')
        });

// this test failing shows us that the search actually performs both through name and id
        it('check response contains empty array', () => {
            expect(res.body.data).to.be.empty
        });
    });

// logically it works as expected but this API call could be used to get all records
    describe('Get Clinic By Name passing whitespace as a term value', () => {

        // declare variable to assign the API call response
        let res

        // hook to be executed before all tests
        before(async () => {

            // perform API call
            res = await request(process.env.BASE_URL)
                .get('clinics?term=%20')
                .set('Authorization', `bearer ${process.env.TOKEN}`)
        })
        it('check response status code', () => {
            expect(res.statusCode).to.eq(200)
        });
        it('check response ok', () => {
            expect(res.body.ok).to.eq(true)
        });
        it('check response contains array of clinics', () => {
            expect(res.body.data).to.be.an('array')
        });
    });
})
