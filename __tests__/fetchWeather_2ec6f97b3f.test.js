// ********RoostGPT********
/*
Test generated by RoostGPT for test testJ using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=fetchWeather_e15d09d035
ROOST_METHOD_SIG_HASH=fetchWeather_2ec6f97b3f


*/

// ********RoostGPT********
const request = require('request');
const fetchWeather = require('./fetch-weather');

jest.mock('request');

describe('fetchWeather', () => {
  beforeAll(() => {
    request.mockClear();
  });

  test('should successfully fetch weather data', done => {
    const mockResponse = {
      statusCode: 200,
      body: JSON.stringify({
        weather: [
          {
            description: 'sunny'
          }
        ],
        main: {
          temp: 20
        }
      })
    };

    request.mockImplementation((options, callback) => {
      callback(null, mockResponse, JSON.parse(mockResponse.body));
    });

    fetchWeather('London', result => {
      expect(result).toEqual({ description: 'sunny', temperature: 20 });
      done();
    });
  });

  test('should handle request errors', done => {
    const mockError = new Error('Request failed');

    request.mockImplementation((options, callback) => {
      callback(mockError, null, null);
    });

    fetchWeather('London', result => {
      expect(result).toBeUndefined();
      done();
    });
  });
});
