const axios = require('axios');

const environment = require('../../env.json');
const deepAssign = require('deep-assign');
const helper = require('./helper');
const config = require('./config');

const { domains, sleepTime } = environment;
const host = domains[environment.environment].coingecko;
const SLEEP_TIME = sleepTime[environment.environment].coingecko;

const requestHeaders = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${config.getKeyProps('coingecko')}`,
};

const exchange = {
  getExchanges: async (options) => {
    options = deepAssign(
      {
        requestHost: host,
        requestPath: 'exchanges',
        requestData: {
          // request data
        },
        requestConfig: {
          params: {
            per_page: 10,
            page: 1,
          },
          headers: requestHeaders,
        },
      },
      options,
    );

    try {
      await helper.sleep(SLEEP_TIME);
      return await axios.get(
        options.requestHost + options.requestPath,
        // options.requestData,
        options.requestConfig,
      );
    } catch (error) {
      console.log('[ERROR]:[COINGECKO]: Error when getExchanges:', error);
      throw error;
    }
  },
};

module.exports = exchange;
