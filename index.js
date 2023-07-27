import { luno } from './luno.js'
import { getBinance } from './binance.js'
import { forex } from './forex.js'

async function lunotoUSD() {
  try {
    const lunoMYR = await luno();
    const usd = await forex();
    const results = lunoMYR / usd;
    console.log("BTCUSD price on Luno: USD", results);
    return results;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

 async function priceDifference() {
    try {
   const lunoUSD = await lunotoUSD();
   const binanceUSD = await getBinance();
   const result = lunoUSD - binanceUSD;
   console.log(`Price difference = USD `, result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

 async function premium() {
    try {
  const LunoUSD = await lunoUSD();
  const price = await priceDifference();
  const ratio = price / LunoUSD;
  const premium = ratio * 100;
  console.log(`Luno Premium: `, premium, `%`)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
 }

lunotoUSD();
priceDifference();
premium();
