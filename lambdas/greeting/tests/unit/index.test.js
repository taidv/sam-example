'use strict';

const app = require('../../index.js');
const chai = require('chai');
const expect = chai.expect;
var event, context;

describe('Tests index', function () {
  it('verifies successful response, no name', async () => {
    const result = await app.handler(event, context);

    expect(result).to.be.an('object');
    expect(result.statusCode).to.equal(200);
    expect(result.body).to.be.an('string');

    let response = JSON.parse(result.body);

    expect(response).to.be.an('object');
    expect(response.message).to.be.equal('Hello, there');
  });
  it('verifies successful response, with name', async () => {
    event = { queryStringParameters: { name: 'Bob' } };
    const result = await app.handler(event, context);

    expect(result).to.be.an('object');
    expect(result.body).to.be.an('string');

    let response = JSON.parse(result.body);

    expect(response).to.be.an('object');
    expect(response.message).to.be.equal('Hello, Bob');
  });
});
