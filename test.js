// const { expect } = require('@jest/globals');
const superTest = require('supertest')
const app = require('./src/app')

test(' Get Route /search test basic expect status code 200',(done) => {
superTest(app)
.post('/search')
.expect(200)
.end((error,response) =>{
    if(error) return done(error);
    // expect(response.statusCode).toBe(200)
    done();
})
})

test('if user enter endpoint not found expect status code 404',(done) => {
    superTest(app)
    .get('/hi')
    .expect(404)
    .end((error,response)=>{
        if(error) return done(error)
        done()
    })
})