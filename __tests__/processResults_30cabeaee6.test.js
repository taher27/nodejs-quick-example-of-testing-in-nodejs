// ********RoostGPT********
/*
Test generated by RoostGPT for test testJ using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=processResults_44e0f4b06e
ROOST_METHOD_SIG_HASH=processResults_30cabeaee6


*/

// ********RoostGPT********
const { processResults } = require('./fetch-weather');
const kelvinToCelcius = require('./kelvinToCelcius');
const getRainFall = require('./getRainFall');

describe('processResults', () => {
  let allResults;

  beforeEach(() => {
    allResults = {
      main: {
        temp_min: 280,
        temp_max: 290,
      },
      rain: {
        '3h': 3
      },
      clouds: {
        all: 75
      },
    };
  });

  test('should correctly process results when allResults is present', () => {
    const result = processResults(allResults);

    expect(result).toEqual({
      minTemp: kelvinToCelcius(allResults.main.temp_min),
      maxTemp: kelvinToCelcius(allResults.main.temp_max),
      chanceRain: 0.83,
      rainFall: getRainFall(allResults.rain),
      cloudCover: allResults.clouds.all
    });
  });

  test('should return empty object when allResults is not present', () => {
    const result = processResults();

    expect(result).toEqual({});
  });

  test('should correctly process results when some fields in allResults are missing', () => {
    delete allResults.main.temp_min;
    delete allResults.rain;

    const result = processResults(allResults);

    expect(result).toEqual({
      minTemp: kelvinToCelcius(10),
      maxTemp: kelvinToCelcius(allResults.main.temp_max),
      chanceRain: 0.83,
      rainFall: getRainFall(),
      cloudCover: allResults.clouds.all
    });
  });
});
