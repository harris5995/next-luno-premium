//This file fetches the Luno price from the API

// import promptSync from 'prompt-sync'; 
// const prompt = promptSync(); 
// const currencyLuno = prompt('Please type out the desired currency in Luno: ');




export async function luno(currency) {
	try
	{

		if (currency !== null) 
		{
			const pair = currency + "MYR"
			const response = await fetch("https://api.luno.com/api/1/ticker?pair=" + pair);
		
			if (response.status === 200) 
			{
				const currencyPair = await response.json();
				return +currencyPair.last_trade;
			}
			else
			{
				throw "Fetch error";
			}
  		}
	}
  	catch (error) 
	{ //Crashes the program in cases of error
		if (error === "Fetch error")
	  		return "Failed to retrieve price";
		throw error 
  	}
}

