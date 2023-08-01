import Binance from 'node-binance-api';

export async function getBinance() {
    try{
        const binance = new Binance();
        const ticker = await binance.prices();
        return +ticker.BTCBUSD;
    }
  catch (err) {
	if (err === "Fetch error")
	  return "Failed to retrieve price";
	throw err //crashes the program in cases of error
  }}
    //console.info(`BTCBUSD price on Binance: USD ${ticker.BTCBUSD}`);
    // const number = parseFloat(ticker.BTCBUSD);
    // return number;

getBinance()

//const a = await getBinance();
//console.log(`BTCBUSD price on Binance: USD`, a)


