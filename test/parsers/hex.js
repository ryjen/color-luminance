var assert = require('assert');
var expect = require('chai').expect;
var parseHex = require('../../src/parsers/hex').parse

describe('parse hex', function() {
  describe('converting valid colors', function() {
    it('should convert black', function() {
      var color = '#000000';
      var result = parseHex(color);
      var expectedResult = {
        r: 0,
        g: 0,
        b: 0
      };

      expect(result).to.deep.equal(expectedResult)
    });

    it('should convert white', function() {
      var color = '#ffffff';
      var result = parseHex(color);
      var expectedResult = {
        r: 255,
        g: 255,
        b: 255
      };

      expect(result).to.deep.equal(expectedResult)
    });

    it('should convert red', function() {
      var color = '#ff0000';
      var result = parseHex(color);
      var expectedResult = {
        r: 255,
        g: 0,
        b: 0
      };

      expect(result).to.deep.equal(expectedResult)
    });
  });

  describe('converting invalid colors', function() {
    it('should return null', function() {
      var color = '#gahsrgas';
      var result = parseHex(color);
      var expectedResult = null

      expect(result).to.equal(expectedResult)
    });
  });

});