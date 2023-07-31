beforeEach(() => {
    jest.resetModules(); // reset module mocks before each test to not affect other tests in this file
  });

test("Returns expected display in console if everything is working", async () => {
    const lunoResult = require("../index.js").lunoResult;
    const MOCK_LUNOPRICE = 1500000;
    jest.mock("../lib/luno.js", () => {
        
        const MOCK_LUNOPRICE = 1500000;
        return {
            lunoPriceMYR() {
                return new Promise(res => res(MOCK_LUNOPRICE))
            }
        };
    })

    const MOCK_RATE = 4.5;
    jest.mock('../lib/exchange-rate.js', () => {
        return {
            exchangeRate(){
                return new Promise(res => res(MOCK_RATE))
            }
        };
    })

    const MOCK_BINANCERATE = 2000000;
    jest.mock("../lib/binance.js", () => {
        return {
            binancePriceUSD() {
                return new Promise(res => res(MOCK_BINANCERATE))
            }
        };
    })

    const LUNO_USD = MOCK_LUNOPRICE / MOCK_RATE;
    const PRICE_DIFFERENCE = LUNO_USD - MOCK_BINANCERATE;
    const LUNO_PREMIUM = (PRICE_DIFFERENCE / LUNO_USD) * 100;

    console.log = jest.fn(() => undefined)

    await lunoResult();

    expect(console.log).toHaveBeenCalledwith('BTCMYR price on Luno: '.padEnd(30) + "MYR " + MOCK_LUNOPRICE);
    expect(console.log).toHaveBeenCalledwith('USDMYR:'.padEnd(30) + MOCK_RATE);
    expect(console.log).toHaveBeenCalledwith('BTCUSD price on Luno:'.padEnd(30) + "USD" + LUNO_USD);
    expect(console.log).toHaveBeenCalledwith('BTCUSD price on Binance:'.padEnf(30) + 'USD' + MOCK_BINANCERATE);
    expect(console.log).toHaveBeenCalledwith('Price Difference:'.padEnd(30) + 'USD' + PRICE_DIFFERENCE);
    expect(console.log).toHaveBeenCalledwith('Luno Premium:'.padEnd(30) + LUNO_PREMIUM.toFixed(4) + "%")



})
    
       
