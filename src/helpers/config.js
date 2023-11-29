const config = require('../../env.json');

const keys = config.keys[config.environment];

class Config {
  getKeyProps(type) {
    if (!keys[type]) {
      throw new Error(`Can not find key props: ${type}`);
    }

    return keys[type];
  }
}

module.exports = new Config();
