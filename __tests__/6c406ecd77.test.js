// ********RoostGPT********
/*
Test generated by RoostGPT for test testM using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=8f3d2d7938
ROOST_METHOD_SIG_HASH=6c406ecd77


*/

// ********RoostGPT********
const assert = require('chai').assert;
const expect = require('chai').expect;
const helloWeather = require('./weather-kit');

let monday, tuesday, wednesday, thursday, friday;

describe('Test the weather kit module\'s basic functionality', function () {

  beforeEach(() => {
    monday = { weather: 'rainy', temperature: 15 };
    tuesday = { weather: 'sunny', temperature: 25 };
    wednesday = { weather: 'sunny', temperature: 30 };
    thursday = { weather: 'cloudy', temperature: 20 };
    friday = { weather: 'rainy', temperature: 10 };
  });

  it('should return true for umbrella test if it is raining', function () {
    expect(helloWeather.doINeed.umbrella(monday)).to.be.a('boolean');
    expect(helloWeather.doINeed.umbrella(tuesday)).equal(false);
    expect(helloWeather.doINeed.umbrella(wednesday)).equal(false);
    expect(helloWeather.doINeed.umbrella(friday)).equal(true);
  });

  it('should return true if suncream is required', function () {
    expect(helloWeather.doINeed.suncream(monday)).to.be.a('boolean');
    expect(helloWeather.doINeed.suncream(monday)).equal(false);
    expect(helloWeather.doINeed.suncream(tuesday)).equal(true);
    expect(helloWeather.doINeed.suncream(wednesday)).equal(true);
  });

  it('should return true if jumper is required', function () {
    assert.typeOf(helloWeather.doINeed.jumper(monday), 'boolean');
    assert.typeOf(helloWeather.doINeed.jumper(tuesday), 'boolean', 'boolean returned');
    assert.equal(helloWeather.doINeed.jumper(wednesday), false, 'should return false, because it is very warm on wednesday');
    assert.equal(helloWeather.doINeed.jumper(thursday), true);
  });

  it('should always return true as water is always required', function () {
    expect(helloWeather.doINeed.water(monday)).equal(true);
    expect(helloWeather.doINeed.water(tuesday)).equal(true);
    expect(helloWeather.doINeed.water(wednesday)).equal(true);
    expect(helloWeather.doINeed.water(thursday)).equal(true);
    expect(helloWeather.doINeed.water(friday)).equal(true);
  });
});
