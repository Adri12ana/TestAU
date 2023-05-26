

const request = require('supertest');
const expect = require('chai').expect;
describe('POST /pet/{petId}/uploadImage', function () {
  it('test', async () => {
    const response = await request('https://petstore.swagger.io/v2')
      .get('/pet/1');
    console.log(response.statusCode)
    expect(response.statusCode).to.be.equal(200)
  })
});

const tests = "";