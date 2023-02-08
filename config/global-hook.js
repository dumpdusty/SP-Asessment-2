// global hook to be executed before all tests

const request = require("supertest");
require('dotenv').config()

before(async () => {
    const response = await request(process.env.BASE_URL)
        .get(`auth?email=${process.env.EMAIL}&password=${process.env.PASSWORD}`)

    process.env.TOKEN = response.body.data.session.token
})
