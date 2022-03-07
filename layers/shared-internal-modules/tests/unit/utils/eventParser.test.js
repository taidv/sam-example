'use strict';

const eventParser = require('../../../utils/eventParser.js');
const chai = require('chai');
const expect = chai.expect;

describe('Tests eventParser', function () {
  it('parse object', () => {
    const result = eventParser.parse({ body: 42 });

    expect(result).to.be.an('object');
    expect(result.body).to.be.equal(42);
  });
  it('parse undefined', async () => {
    const result = eventParser.parse(undefined);

    expect(result).to.be.an('object');
    expect(result.body).to.be.equal(undefined);
  });
});
