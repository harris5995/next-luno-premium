//This file prints all the relevant information taken from the files in the lib/ directory.

import { luno } from './lib/luno.js';
import { getBinance } from './lib/binance.js';
import { forex } from './lib/exchangeRate.js';
import { lunoToUSD, priceDifference, lunoPremium } from './lib/math.js';
import { userInput} from './lib/userInput.js';

export async function endResult() 
{
    const pairList = ['XBT', 'XRP', 'ETH', 'LTC', 'XRP', 'BCH', 'ADA']
    const currency = await userInput();
    
    if(pairList.includes(currency)) 
    {
        const luno1 = await luno(currency);
        const forex1 = await forex();
        const binance1 = await getBinance(currency);
        const lunoUSD = await lunoToUSD(currency);
        const pD = await priceDifference(currency);
        const lP = await lunoPremium(currency);

        console.log(currency + 'MYR price on Luno:'.padEnd(30) + 'MYR ' + luno1)
        console.log('USDMYR:'.padEnd(33) + forex1)
        console.log(currency + 'USD price on Luno:'.padEnd(30) + 'USD ' + lunoUSD);
        console.log(currency + 'BUSD price on Binance:'.padEnd(30) + 'USD ' + binance1)
        console.log('Price Difference:'.padEnd(33) + 'USD ' + pD);
        console.log('Luno Premium:'.padEnd(33) + lP.toFixed(4) + '%');

        console.log("To end program, type 'End'.")
        
        setTimeout(endResult, 1000);
    }
    else if (currency === "End")
    {
        console.log("Ending program.")
    }
    else
    {
        console.log("Error: Invalid currency code, please try again.");
        endResult();
    }
}



endResult()


//Summary for next-luno-premium
// 1. Fetches API data for LunoMYR, BinanceUSD & MYRUSD exchange rate (luno.js, binance.js, exchangeRate.js)
// 2. Using the API data, the LunoUSD, Price Difference (between LunoUSD & BinanceUSD) and Luno Premium are calculated (math.js)
// 3. In index.js, all the values obtained are printed via the endResult function.
// 4. Created test files for unit testing and integration testing for the entire project.
 