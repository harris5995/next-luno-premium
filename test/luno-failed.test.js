beforeEach(() => {
    jest.resetModules(); // reset module mocks before each test to not affect other tests in this file
  });
  
  const MOCK_STATUS_CODE = 500

  // we're modifying the fetch method to return these values
  global.fetch = jest.fn(() => Promise.resolve({
    status: MOCK_STATUS_CODE,
    json: () => { }
  }));
  
  import { luno } from '../lib/luno.js'
  
  test("Returns Message for Failed Luno Response", async () => {
    expect(await luno()).toBe("Failed to retrieve price");
  });
  