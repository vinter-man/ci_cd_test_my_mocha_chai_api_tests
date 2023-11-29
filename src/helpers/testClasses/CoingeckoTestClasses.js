const TestClass = require('./TestClass.js');
const { expect } = require('chai');

class ExchangesTestClass extends TestClass {
  constructor(testObject) {
    super(testObject);
    this.perPage = this.requestParams.per_page;
  }

  testLength(
    numberOfResults = this.perPage,
    text = 'The response array must contain the requested number of results',
  ) {
    expect(this.data.length, text).equal(numberOfResults);
  }
}

module.exports = { ExchangesTestClass };
