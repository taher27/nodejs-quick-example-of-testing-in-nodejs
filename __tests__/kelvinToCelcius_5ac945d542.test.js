// ********RoostGPT********
/*
Test generated by RoostGPT for test testM using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=kelvinToCelcius_c4e254281d
ROOST_METHOD_SIG_HASH=kelvinToCelcius_5ac945d542


*/

// ********RoostGPT********
// Import required modules
var expect = require('chai').expect;
var weather = require('../weather/fetch-weather');

// Describe test suite for Weather Module
describe('Weather Module', function() {
  
  // Describe test suite for kelvinToCelcius function
  describe('kelvinToCelcius', function() {
    
    // Test case: Should convert Kelvin temperature to Celsius correctly
    it('should convert Kelvin temperature to Celsius correctly', function() {
      expect(weather.kelvinToCelcius(300)).to.equal(27);
    });

    // Test case: Should return -273 when given 0 Kelvin
    it('should return -273 when given 0 Kelvin', function() {
      expect(weather.kelvinToCelcius(0)).to.equal(-273);
    });

    // Test case: Should throw an error when given a negative Kelvin temperature
    it('should throw an error when given a negative Kelvin temperature', function() {
      expect(() => weather.kelvinToCelcius(-1)).to.throw(Error);
    });

    // Test case: Should throw an error when given a non-numeric input
    it('should throw an error when given a non-numeric input', function() {
      expect(() => weather.kelvinToCelcius('abc')).to.throw(Error);
    });
  });
});
