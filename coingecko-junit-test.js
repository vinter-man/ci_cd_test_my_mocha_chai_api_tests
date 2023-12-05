const Mocha = require('mocha');
const glob = require('glob');

const mocha = new Mocha();

mocha.reporter('mocha-junit-reporter');
mocha.timeout(3000);

const testFilesGlob = './src/tests/coingecko/*.test.js';
const testFiles = glob.sync(testFilesGlob);
testFiles.forEach((file) => {
  mocha.addFile(file);
});

mocha.run((failures) => {
  // To fail pipeline
  process.exitCode = failures ? 1 : 0;
});
