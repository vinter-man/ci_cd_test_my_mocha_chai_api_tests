const helper = {
  sleep: async (sec) => {
    const ms = sec * 1000
    return new Promise((resolve) => setTimeout(resolve, ms));
  },

  randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  },

  subTest(message, fn) {
    try {
      fn();
    } catch (error) {
      throw Object.assign(error, {
        message: `Failed step: ${message}: ${error.message}`,
      });
    }
  },
};

module.exports = helper;
