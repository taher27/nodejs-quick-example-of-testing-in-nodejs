// ********RoostGPT********
/*
Test generated by RoostGPT for test checkNodejsDepsInstalled using AI Type Open AI and AI Model gpt-4


ROOST_TEST_HASH=4c53294148

*/

// ********RoostGPT********
const fetchWeather = require('./fetchWeather');
const prepareForWeather = require('./prepareForWeather');

describe('fetchWeather function', () => {
  
  let today;
  
  beforeAll(() => {
    today = 'sunny';
  });
  
  test('should call the doINeed method for each item in weatherKit', () => {
    const mockDoINeed = jest.spyOn(prepareForWeather, 'doINeed');

    fetchWeather.fetchWeather(today, () => {});

    expect(mockDoINeed).toHaveBeenCalledWith('umbrella', today);
    expect(mockDoINeed).toHaveBeenCalledWith('suncream', today);
    expect(mockDoINeed).toHaveBeenCalledWith('jumper', today);
    expect(mockDoINeed).toHaveBeenCalledWith('water', today);
  });

  test('should correctly print each item in weatherKit', () => {
    const mockPrintLine = jest.fn();

    global.printLine = mockPrintLine;

    fetchWeather.fetchWeather(today, () => {});

    expect(mockPrintLine).toHaveBeenCalledWith('Umbrella', expect.any(String));
    expect(mockPrintLine).toHaveBeenCalledWith('Suncream', expect.any(String));
    expect(mockPrintLine).toHaveBeenCalledWith('Jumper', expect.any(String));
    expect(mockPrintLine).toHaveBeenCalledWith('Water', expect.any(String));
  });

  test('should handle errors correctly', () => {
    const error = new Error('Failed to fetch weather');

    fetchWeather.fetchWeather = jest.fn(() => {
      throw error;
    });

    expect(() => fetchWeather.fetchWeather(today, () => {})).toThrowError('Failed to fetch weather');
  });
});
