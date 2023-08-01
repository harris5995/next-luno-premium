import { luno } from './luno.js'
import { forex } from './exchange-rate.js'

export async function lunotoUSD() {
    try {
      const lunoMYR = await luno();
      const usd = await forex();
      const results = lunoMYR / usd;
      console.log(results)
      return results;
  
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  }
  
  lunotoUSD()