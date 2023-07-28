import 'dotenv/config'

async function forex() {
  try {
    const myHeaders = new Headers();
    myHeaders.append(process.env.API, process.env.APIKEY);

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    const response = await fetch("https://api.apilayer.com/fixer/convert?to=MYR&from=USD&amount=1", requestOptions);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const convertedAmount = data.result;
    //console.log("USDMYR:", convertedAmount);
    const number = parseFloat(convertedAmount);
    return number;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// const a = await forex();
// console.log("USDMYR:", a)

export { forex }

