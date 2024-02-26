// ********RoostGPT********
/*
Test generated by RoostGPT for test checkNodejsDepsInstalled using AI Type Open AI and AI Model gpt-4


ROOST_TEST_HASH=fetchWeather_8dcf21317f

*/

// ********RoostGPT********
var expect = require('chai').expect;
var sinon = require('sinon');
var request = require('request');

var fetchWeather = require('./fetch-weather');

describe('fetchWeather', function() {
  var sandbox;

  beforeEach(function() {
    sandbox = sinon.createSandbox();
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('should fetch weather data for a given location', function(done) {
    var mockResponse = {
      statusCode: 200,
      body: {
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ]
      }
    };

    sandbox.stub(request, 'request').yields(null, mockResponse);

    fetchWeather('London', function(result) {
      expect(result).to.deep.equal(mockResponse.body);
      done();
    });
  });

  it('should return an error when the request fails', function(done) {
    var mockError = new Error('Request failed');

    sandbox.stub(request, 'request').yields(mockError);

    fetchWeather('London', function(result) {
      expect(result).to.be.an('error');
      expect(result.message).to.equal('Request failed');
      done();
    });
  });
});
