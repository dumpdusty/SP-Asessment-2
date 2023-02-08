import request from 'supertest'
import 'dotenv/config'


describe('Authentication', () => {
    let res
    before(async()=>{
        res = await request(process.env.BASE_URL)
            .get('auth?email=gianna@hightable.test&password=thedantonio1')
    })

    it('check response status code', () => {

    });
});
