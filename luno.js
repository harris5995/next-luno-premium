async function luno() {
	const response = await fetch(
		"https://api.luno.com/api/1/ticker?pair=XBTMYR"
        );
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	const jsonResponse = await response.json();
    console.log(jsonResponse);
    console.log("BTCMYR price on Luno: MYR", jsonResponse.ask);
    //parseFloat(jsonResponse)
}

//console.log("BTCMYR price on Luno: MYR", luno());


    

