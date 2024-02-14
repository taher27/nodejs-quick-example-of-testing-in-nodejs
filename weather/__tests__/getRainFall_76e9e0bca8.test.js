// ********RoostGPT********
// Test generated by RoostGPT for test checkJestConfigChanges using AI Type Open AI and AI Model gpt-4

// ********RoostGPT********
var assert = require("assert");
var { getRainFall } = require("../fetch-weather.js");

describe("fetchWeather", function () {
  describe("#getRainFall()", function () {
    it("should return 0 when no argument is passed", function () {
      assert.equal(getRainFall(), 0);
    });

    it("should return 0 when the object does not have 1h, 2h or 3h properties", function () {
      assert.equal(getRainFall({}), 0);
    });

    it("should return the value of 1h when it exists", function () {
      assert.equal(getRainFall({ "1h": 5 }), 5);
    });

    it("should return the value of 2h when it exists and 1h does not", function () {
      assert.equal(getRainFall({ "2h": 5 }), 5);
    });

    it("should return the value of 3h when it exists and 1h and 2h do not", function () {
      assert.equal(getRainFall({ "3h": 5 }), 5);
    });

    it("should return the value of 1h when 1h, 2h and 3h all exist", function () {
      assert.equal(getRainFall({ "1h": 5, "2h": 6, "3h": 7 }), 5);
    });
  });
});