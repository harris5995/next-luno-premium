//This file fetches the Binance price from the Binance SDK

// import promptSync from 'prompt-sync'; 
// const prompt = promptSync(); 
// const currency = prompt('Please type out the desired currency in Binance: ');


import Binance from 'node-binance-api';

export async function getBinance(currency) {
  try 
  {
 
    if (currency !== null) 
    {
      if (currency === "XBT") 
        currency = "BTC";

      const binance = new Binance();
      const ticker = await binance.prices();
      const pair = currency + "BUSD"
      const price = +ticker[pair];
    
      if (isNaN(price) === false) 
        return +price;
      else 
      {
        throw "NaN value";
      }
    }
  } 
  catch (error) 
  {
    if (error === "NaN value")
    return "Failed to retrieve price"
    throw error;
  }

}





