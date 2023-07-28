import Binance from 'node-binance-api';

const binance = new Binance()

async function getBinance() {
    let ticker = await binance.prices();
    //console.info(`BTCBUSD price on Binance: USD ${ticker.BTCBUSD}`);
    const number = parseFloat(ticker.BTCBUSD);
    return number;
}

const a = await getBinance();
console.log(`BTCBUSD price on Binance: USD`, a)

export { getBinance }

