import { luno } from './lib/luno.js'
import { getBinance } from './lib/binance.js'
import { forex } from './lib/exchange-rate.js'
import { lunotoUSD, priceDifference, lunoPremium } from './lib/math.js';


// const luno1 = await luno();
// const forex1 = await forex();
// const binance1 = await getBinance();
// const lunoUSD = await lunotoUSD();
// const pD = await priceDifference();
// const lP = await lunoPremium();

export async function endResult() {

const luno1 = await luno();
const forex1 = await forex();
const binance1 = await getBinance();
const lunoUSD = await lunotoUSD();
const pD = await priceDifference();
const lP = await lunoPremium();

console.log('BTCMYR price on Luno:'.padEnd(30) + 'MYR' + luno1)
console.log('USDMYR:'.padEnd(30) + forex1)
console.log('BTCUSD price on Luno:'.padEnd(30) + 'USD' + lunoUSD);
console.log('BTCBUSD price on Binance:'.padEnd(30) + 'USD' + binance1)
console.log('Price Difference:'.padEnd(30) + 'USD' + pD);
console.log('Luno Premium:'.padEnd(30) + lP.toFixed(4) + '%');
}

endResult()
// async function lunotoUSD() {
//   try {
//     const lunoMYR = luno1;
//     const usd = forex1;
//     const results = lunoMYR / usd;
//     return results;

//   } catch (error) {
//       console.error('Error fetching data:', error);
//   }
// }

//   async function priceDifference() {
//      try {
//       const luno = lunoUSD;
//       const binance = binance1;
//       const result = luno - binance;
//       return result;

//      } catch (error) {
//         console.error('Error fetching data:', error);
//      }
//    }

//   async function lunoPremium() {
//     try {
//     const Luno = lunoUSD;
//     const price = pD;
//     const ratio = price / Luno;
//     const premium = ratio * 100;
//     return premium;

//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
//  }




