// ********RoostGPT********
/*
Test generated by RoostGPT for test testing-nodejs using AI Type  and AI Model 

ROOST_METHOD_HASH=kelvinToCelcius_c4e254281d
ROOST_METHOD_SIG_HASH=kelvinToCelcius_5ac945d542


*/

// ********RoostGPT********
const { kelvinToCelcius } = require('../weather/fetch-weather');

describe('kelvinToCelcius function', () => {
  test('should exist', () => {
    expect(kelvinToCelcius).toBeDefined();
  });

  test('should correctly convert Kelvin to Celsius', () => {
    const kelvin = 300;
    const expectedCelsius = 27;
    expect(kelvinToCelcius(kelvin)).toBe(expectedCelsius);
  });

  test('should round the result', () => {
    const kelvin = 303.33;
    const expectedCelsius = 30;
    expect(kelvinToCelcius(kelvin)).toBe(expectedCelsius);
  });

  test('should throw an error when the input is not a number', () => {
    expect(() => {
      kelvinToCelcius('string');
    }).toThrow();
  });

  test('should throw an error when the input is less than absolute zero (0K)', () => {
    expect(() => {
      kelvinToCelcius(-1);
    }).toThrow();
  });
});
