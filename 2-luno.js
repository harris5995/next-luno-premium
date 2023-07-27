async function luno() {
	try{
		const response = await fetch(
		"https://api.luno.com/api/1/ticker?pair=XBTMYR"
        );

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	const jsonResponse = await response.json();
	const BTCMYR = jsonResponse.last_trade;
    console.log("BTCMYR price on Luno: MYR", jsonResponse.last_trade);
    const number = parseFloat(BTCMYR);
    return number;
    
	} catch (error) {
		console.error('Error fetching data:', error);
	}
}

luno()
//await console.log("BTCMYR price on Luno: MYR", number);
export { luno }
// async function lunowrite() {
// 	console.log("BTCMYR price on Luno: MYR", luno());
// }

    

