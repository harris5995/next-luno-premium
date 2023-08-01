import { luno } from './luno.js'
import { getBinance } from './binance.js'
import { forex } from './exchange-rate.js'

// const luno1 = await luno();
// const forex1 = await forex();
// const binance1 = await getBinance();
// const lunoUSD = await lunotoUSD();
// const pD = await priceDifference();
// const lP = await lunoPremium();

export async function lunotoUSD() {
    try {
      const lunoMYR = await luno();
      const usd = await forex();
      const results = lunoMYR / usd;
      return results;
  
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  }
  
export async function priceDifference() {
    try {
        const luno = await lunotoUSD();
        const binance = await getBinance();
        const result = luno - binance;
        return result;
  
       } catch (error) {
          console.error('Error fetching data:', error);
       }
     }
  
export async function lunoPremium() {
    try {
      const Luno = await lunotoUSD();
      const price = await priceDifference();
      const ratio = price / Luno;
      const premium = ratio * 100;
      return premium;
  
      } catch (error) {
          console.error('Error fetching data:', error);
      }
   }