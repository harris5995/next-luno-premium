require('dotenv').config()

// const dummy = {
//   pair: 'XBTMYR',
//   timestamp: 1690424345920,
//   bid: '134028.00000000',
//   ask: '134029.00000000',
//   last_trade: '134056.00000000',
//   rolling_24_hour_volume: '19.00806600',
//   status: 'ACTIVE'
// }

async function forex() {
  try {
    const myHeaders = new Headers();
    myHeaders.append("apikey", "ZvV5DCbAXWZYna8f6f3ZFSkIFkCjgL7N");

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    const response = await fetch("https://api.apilayer.com/fixer/convert?to=MYR&from=USD&amount=100", requestOptions);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const convertedAmount = data.result;
    console.log("USDMYR:", convertedAmount);
    const number = parseFloat(convertedAmount);
    return number;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

async function calculateConvertedAmount() {
  const resultForex = await forex();
  console.log(resultForex * 2);
}

calculateConvertedAmount();
