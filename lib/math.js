import { luno } from './luno.js'
import { getBinance } from './binance.js'
import { forex } from './exchangeRate.js'

//Function converts LunoMYR to LunoUSD
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
  
//Function calculates the price difference between LunoUSD & LunoBinance  
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
 
//Function calculates the Luno Premium     
export async function lunoPremium() {
    try {
      const Luno = await lunotoUSD();
      const price = await priceDifference();
      const premium = (price / Luno) * 100;
      return premium;
  
      } catch (error) {
          console.error('Error fetching data:', error);
      }
   }