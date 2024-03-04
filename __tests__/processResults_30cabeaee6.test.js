// ********RoostGPT********
/*
Test generated by RoostGPT for test testM using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=processResults_44e0f4b06e
ROOST_METHOD_SIG_HASH=processResults_30cabeaee6


*/

// ********RoostGPT********
const { expect } = require('chai');
const { processResults } = require('./fetch-weather');

describe('processResults', () => {
  let allResults;

  beforeEach(() => {
    allResults = {
      main: {
        temp_min: 280, // Kelvin
        temp_max: 300, // Kelvin
      },
      rain: {
        '3h': 2,
      },
      clouds: {
        all: 50,
      },
    };
  });

  it('should return correct results when allResults is defined', () => {
    const result = processResults(allResults);
    expect(result).to.deep.equal({
      minTemp: 6.85, // Celsius
      maxTemp: 26.85, // Celsius
      chanceRain: 0.83,
      rainFall: 2, // mm
      cloudCover: 50, // %
    });
  });

  it('should return default results when allResults is undefined', () => {
    const result = processResults(undefined);
    expect(result).to.deep.equal({
      minTemp: -263.15, // Celsius
      maxTemp: -263.15, // Celsius
      chanceRain: 0.83,
      rainFall: 0, // mm
      cloudCover: 10, // %
    });
  });

  it('should return default results when allResults.main is undefined', () => {
    allResults.main = undefined;
    const result = processResults(allResults);
    expect(result).to.deep.equal({
      minTemp: -263.15, // Celsius
      maxTemp: -263.15, // Celsius
      chanceRain: 0.83,
      rainFall: 2, // mm
      cloudCover: 50, // %
    });
  });

  it('should return default results when allResults.rain is undefined', () => {
    allResults.rain = undefined;
    const result = processResults(allResults);
    expect(result).to.deep.equal({
      minTemp: 6.85, // Celsius
      maxTemp: 26.85, // Celsius
      chanceRain: 0.83,
      rainFall: 0, // mm
      cloudCover: 50, // %
    });
  });

  it('should return default results when allResults.clouds is undefined', () => {
    allResults.clouds = undefined;
    const result = processResults(allResults);
    expect(result).to.deep.equal({
      minTemp: 6.85, // Celsius
      maxTemp: 26.85, // Celsius
      chanceRain: 0.83,
      rainFall: 2, // mm
      cloudCover: 10, // %
    });
  });
});