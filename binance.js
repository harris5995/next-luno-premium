const Binance = require('node-binance-api');
const binance = new Binance().options({
  APIKEY: '<key>',
  APISECRET: '<secret>'
});

async function getBinance() {
    let ticker = await binance.prices();
    console.info(`Price of BNB: ${ticker.BTCBUSD}`);
}

getBinance();