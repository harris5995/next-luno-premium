beforeEach(() => {
    jest.resetModules(); // reset module mocks before each test to not affect other tests in this file
  });

test("Returns expected display in console if everything is working", async () => {
    const endResult = require("../index3.js").endResult;
    const MOCK_LUNOPRICE = 1500000;
    jest.mock("../lib/luno.js", () => {
        
        const MOCK_LUNOPRICE = 1500000;
        return {
            luno() {
                return new Promise(res => res(MOCK_LUNOPRICE))
            }
        };
    })

    const MOCK_RATE = 4.5;
    jest.mock('../lib/exchange-rate.js', () => {
        return {
            forex(){
                return new Promise(res => res(MOCK_RATE))
            }
        };
    })

    const MOCK_BINANCERATE = 2000000;
    jest.mock("../lib/binance.js", () => {
        return {
            getBinance() {
                return new Promise(res => res(MOCK_BINANCERATE))
            }
        };
    })

    jest.mock('../lib/math.js', () => {
        return {
          lunotoUSD() {
            const MOCK_LUNOUSD = 2500000;
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
    
    // const MOCK_LUNOUSD = 2500000;
    // jest.mock("../lib/math.js", () => {
    //     return {
    //         lunotoUSD() {
    //             return new Promise(res => res(MOCK_LUNOUSD))
    //         }
    //     };
    // })

    // const PRICE_DIFFERENCE = 1;
    // jest.mock("../lib/math.js", () => {
    //     return {
    //         priceDifference() {
    //             return new Promise(res => res(PRICE_DIFFERENCE))
    //         }
    //     };
    // })

    // const LUNO_PREMIUM = 0.25;
    // jest.mock("../lib/math.js", () => {
    //     return {
    //         lunoPremium() {
    //             return new Promise(res => res(LUNO_PREMIUM))
    //         }
    //     };
    // })

    console.log = jest.fn(() => undefined)

    await endResult();

    expect(console.log).toHaveBeenCalledwith('BTCMYR price on Luno: '.padEnd(30) + "MYR " + MOCK_LUNOPRICE);
    expect(console.log).toHaveBeenCalledwith('USDMYR:'.padEnd(30) + MOCK_RATE);
    expect(console.log).toHaveBeenCalledwith('BTCUSD price on Luno:'.padEnd(30) + "USD" + LUNO_USD);
    expect(console.log).toHaveBeenCalledwith('BTCUSD price on Binance:'.padEnd(30) + 'USD' + MOCK_BINANCERATE);
    expect(console.log).toHaveBeenCalledwith('Price Difference:'.padEnd(30) + 'USD' + PRICE_DIFFERENCE);
    expect(console.log).toHaveBeenCalledwith('Luno Premium:'.padEnd(30) + LUNO_PREMIUM.toFixed(4) + "%")



})
    
       
