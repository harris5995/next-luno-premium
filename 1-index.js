import { luno } from './2-luno.js'
import { getBinance } from './3-binance.js'
import { forex } from './forex.js'



//await forex();

//console.log(forex());


 async function lunotoUSD() {
  	const Forex = await forex();
    const Luno = await luno();
    const result = Luno / Forex;
  	console.log(`BTCUSD price on Luno: USD`, result);
    return result;
    }
  
 async function priceDifference() {
   const LunoUSD = await lunotoUSD();
   const BinanceUSD = await getBinance();
   const result = LunoUSD - BinanceUSD;
   console.log(`Price difference = USD `, result)
   return result;

 }

 async function premium() {
  const LunoUSD = await lunotoUSD();
  const price = await priceDifference();
  const ratio = price / LunoUSD;
  const premium = ratio * 100;
  console.log(`Luno Premium: `, premium, `%`)
  return premium;
 }

lunotoUSD();
priceDifference();
premium();
