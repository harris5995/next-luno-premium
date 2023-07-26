const Binance = require('node-binance-api');
const binance = new Binance().options({
  APIKEY: '<key>',
  APISECRET: '<secret>'
});

binance.prices('BNBBTC', (error, ticker) => {
    console.info("Price of BNB: ", ticker.BNBBTC);
  });