 // Reset module mocks before each test to not affect other tests in this file
 beforeEach(() => {
    jest.resetModules(); 
  });
 
//Importing functions from math.js
import { lunotoUSD, priceDifference, lunoPremium } from '../lib/math.js';

const MOCK_LUNOUSD = 25000;
const PRICE_DIFFERENCE = 1;
const LUNO_PREMIUM = 0.25;

//Testing lunotoUSD function using mock values
test("Returns mock LunoUSD value if no errors", async () => {
    jest.mock('../lib/math.js', () => {
        return {
          lunotoUSD() {
            const MOCK_LUNOUSD = 25000;
            return Promise.resolve(MOCK_LUNOUSD);
          },
          priceDifference() {
            const PRICE_DIFFERENCE = 1;
            return Promise.resolve(PRICE_DIFFERENCE);
          },
          lunoPremium() {
            const LUNO_PREMIUM = 0.25;
            return Promise.resolve(LUNO_PREMIUM);
          },
        };
      });
})

