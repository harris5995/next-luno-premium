//Code template taken from LMS 'Challenge: Test Luno Premium

// Reset module mocks before each test to not affect other tests in this file
beforeEach(() => {
  jest.resetModules(); 
});


test("Returns price if Binance request succeeds", async () => {
  const getBinance = require('../lib/binance.js').getBinance // your function name could be different

  // Mocking the entire node-binance-api module
  jest.mock('node-binance-api', () => {
    return class Binance {
      // We use only the prices method for this particular test, so we'll mock just this method
      prices() {
        return new Promise(res => {
          res({
            BTCBUSD: 20000
          })
        })
      }
    }
  })

  expect(await getBinance()).toBe(20000);
});






// //test.js
// jest.mock('../lib/binance.js', () => ({
//   getBinance: () => 'BTCBUSD price on Binance: USD 29191.95',
// }));