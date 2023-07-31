beforeEach(() => {
    jest.resetModules(); // reset module mocks before each test to not affect other tests in this file
  });
 
 const MOCK_FOREX = 4.5
 const MOCK_JSON_RESP = { result: MOCK_FOREX }
 
 // we're modifying the fetch method to return these values
 global.fetch = jest.fn(() => Promise.resolve({
   status: 200,
   json: () => Promise.resolve(MOCK_JSON_RESP)
 }));
 
import { forex } from '../lib/exchange-rate.js';
 
 test("Returns the USDMYR rate if successful", async () => {
   expect(await forex()).toBe(MOCK_FOREX);
 });
 
 
 