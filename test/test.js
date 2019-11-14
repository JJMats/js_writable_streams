console.log = function() {}
const { expect } = require('chai');
const rewire = require('rewire');

describe('', function () {
    it('', function () {
      try {
        var appModule = rewire("../app.js");
      } catch (e) {
        expect(true, 'Double check your code. It likely has a syntax error.').to.equal(false);
      }

      let transformData
      try {
        transformData = appModule.__get__("transformData");
      } catch (e) {
        expect(true, 'Did you declare a `transformData` function?').to.equal(false);
      }

      expect(transformData, "Did you create `transformData` as either a function expression or a function declaration?").to.be.an.instanceOf(Function); 

      let log = [];
      appModule.__set__('fileStream.write', thing => log.push(thing)               )

      transformData('test')

      expect(log.includes('They were out of: test\n'),"Does your `transformData` function take in a string parameter and then invoke `fileStream.write()` with a string in the format: `They were out of: [string parameter]\n`. Double check your spelling and punctuation.").to.be.true;
    });
});