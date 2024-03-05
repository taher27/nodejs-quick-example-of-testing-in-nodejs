// ********RoostGPT********
/*
Test generated by RoostGPT for test testJ using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=869bcf28d1
ROOST_METHOD_SIG_HASH=75d10f69f9


*/

// ********RoostGPT********
const preparingData = require('./preparing-data-test');
const sinon = require('sinon');

describe('Test that the data fetched from OpenWeatherMap is processed correctly', function () {
  let callback;

  beforeEach(() => {
    callback = sinon.stub();
  });

  afterEach(() => {
    callback.reset();
  });

  it('Should check fetched data is processed correctly', function () {
    // Arrange
    const city = "London";
    const rawWeatherData = { /* some raw weather data */ };
    callback.withArgs(city).returns(rawWeatherData);

    // Act
    const result = preparingData(city, callback);

    // Assert
    expect(result).toBeDefined();
    expect(result).toEqual(rawWeatherData);
    expect(callback.calledOnceWith(city)).toBeTruthy();
  });

  it('Should throw error when city is not provided', function () {
    // Arrange
    const city = null;

    // Act and Assert
    expect(() => preparingData(city, callback)).toThrow();
  });
});
