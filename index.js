import { luno } from './luno.js'
import { getBinance } from './binance.js'
import { forex } from './forex.js'

const luno1 = await luno()
console.log(`BTCMYR price on Luno: MYR`,luno1)

const forex1 = await forex();
console.log("USDMYR:", forex1)

const binance1 = await getBinance();
console.log(`BTCBUSD price on Binance: USD`,binance1)

const lunoUSD = await lunotoUSD();
console.log("BTCUSD price on Luno: USD", lunoUSD);

const pD = await priceDifference();
console.log(`Price Difference = USD`, pD);

const lP = await lunoPremium();
console.log(`Luno Premium = `, lP, `%`);


async function lunotoUSD() {
  try {
    const lunoMYR = luno1;
    const usd = forex1;
    const results = lunoMYR / usd;
    return results;

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
  async function priceDifference() {
     try {
    const luno = lunoUSD;
    const binance = binance1;
    const result = luno - binance;
    return result;
     } catch (error) {
       console.error('Error fetching data:', error);
     }
   }

  async function lunoPremium() {
    try {
  const Luno = lunoUSD;
  const price = pD;
  const ratio = price / Luno;
  const premium = ratio * 100;
  return premium;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
 }




