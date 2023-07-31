import Binance from 'node-binance-api';

const binance = new Binance()


export async function getBinance() {
    const binance = new Binance()
    const ticker = await binance.prices();
    return +ticker.BTCBUSD
    
    //console.info(`BTCBUSD price on Binance: USD ${ticker.BTCBUSD}`);
    // const number = parseFloat(ticker.BTCBUSD);
    // return number;
}


//const a = await getBinance();
//console.log(`BTCBUSD price on Binance: USD`, a)


