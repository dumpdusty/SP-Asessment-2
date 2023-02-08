// declare the function for login API call

const request = require("supertest");

function login(email, password){
    return request(process.env.BASE_URL)
        .get(`auth?email=${email}&password=${password}`)
}

module.exports = {login}
