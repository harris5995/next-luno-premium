export async function luno() {
	try{
		const response = await fetch(
		"https://api.luno.com/api/1/ticker?pair=XBTMYR"
        );

	if (response.status === 200) 
	{
		const BTCMYR = await response.json();
		return +BTCMYR.last_trade;
	}
	else
	{
	  throw "Fetch error";
	}
  }
  catch (err) {
	if (err === "Fetch error")
	  return "Failed to retrieve price"
	throw err //crashes the program in cases of error
  }
  }
  

// const a = await luno()
// await console.log("BTCMYR price on Luno: MYR ", a)
// async function lunowrite() {
// 	console.log("BTCMYR price on Luno: MYR", luno());
// }

    

