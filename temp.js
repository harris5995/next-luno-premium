import { luno } from './lib/luno.js'
import { getBinance } from './lib/binance.js'
import { forex } from './lib/exchange-rate.js'
import { lunotoUSD, priceDifference, lunoPremium } from './lib/math.js';

async function endResult() {

const luno1 = await luno();
const forex1 = await forex();
const binance1 = await getBinance();
const lunoUSD = await lunotoUSD();
const pD = await priceDifference();
const lP = await lunoPremium();

console.log("BTCMYR price on Luno:".padEnd(30) + "MYR " + luno1)
console.log("USDMYR:".padEnd(30) + forex1)
console.log("BTCUSD price on Luno:".padEnd(30) + "USD " + lunoUSD);
console.log("BTCBUSD price on Binance:".padEnd(30) + "USD " + binance1)
console.log("Price difference:".padEnd(30) + "USD", pD);
console.log("Luno premium:".padEnd(30) + lP.toFixed(4) + "%");
}

endResult()
