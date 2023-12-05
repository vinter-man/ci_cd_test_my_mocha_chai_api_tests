const coingecko = require('../../helpers/coingecko.js');
const {
  ExchangesTestClass,
} = require('../../helpers/testClasses/CoingeckoTestClasses.js');

describe('[COINGECKO][SUITE_1_0]: Exchanges', () => {
  describe('Positive cases', () => {
    describe(`Get 5 exchanges on 1 page`, () => {
      let TestExchanges;
      let EXCHANGES_COUNT = 5;
      let PAGE_NUMBER = 1;

      before(async () => {
        let exchanges = await coingecko.getExchanges({
          requestConfig: {
            params: {
              per_page: EXCHANGES_COUNT,
              page: PAGE_NUMBER,
            },
          },
        });

        TestExchanges = new ExchangesTestClass(exchanges);
      });

      it('[TEST_1_0]: Request code is 200', () => {
        TestExchanges.testCode();
      });

      it('Oh shit', function () {
        expect('norm').equal('shit');
      });

      it(`[TEST_1_1]: The answer contains ${EXCHANGES_COUNT} exchanges`, () => {
        TestExchanges.testLength();
      });
    });
  });
});
