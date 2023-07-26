async function getresponse() {
	const response = await fetch(
		'https://api.luno.com/api/1/orderbook_top?pair=XBTMYR'
        );
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	const jsonResponse = await response.json();
  console.log(jsonResponse);
}

getresponse()