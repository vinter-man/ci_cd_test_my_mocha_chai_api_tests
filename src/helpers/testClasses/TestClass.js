const { expect } = require('chai');

class TestClass {
  constructor(testObject) {
    this.status = testObject.status;
    this.data = testObject.data;
    this.requestData = JSON.parse(testObject.config.data ?? '{}');
    this.requestParams = testObject.config.params ?? {};
  }

  testCode(text = 'Response status code should be', code = 200) {
    expect(this.status, text).equal(code);
  }
}

module.exports = TestClass;
