 beforeEach(() => {
   jest.resetModules(); // reset module mocks before each test to not affect other tests in this file
 });

const MOCK_PRICE = 150000
const MOCK_JSON_RESP = { last_trade: MOCK_PRICE }

// we're modifying the fetch method to return these values
global.fetch = jest.fn(() => Promise.resolve({
  status: 200,
  json: () => Promise.resolve(MOCK_JSON_RESP)
}));

import { luno } from '../lib/luno.js'

test("Returns the BTC Price if successful", async () => {
  expect(await luno()).toBe(MOCK_PRICE);
});





  
