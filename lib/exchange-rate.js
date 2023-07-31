import 'dotenv/config'

export async function forex() {
  try {
    const myHeaders = new Headers();
    myHeaders.append(process.env.API, process.env.APIKEY);

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    const response = await fetch("https://api.apilayer.com/fixer/convert?to=MYR&from=USD&amount=1", requestOptions);
    if (response.status === 200) 
    {
    const exchangeRate = await response.json();
    return +exchangeRate.result;
    // const convertedAmount = data.result;
    // //console.log("USDMYR:", convertedAmount);
    // const number = parseFloat(convertedAmount);
    // return number;
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

// const a = await forex();
// console.log("USDMYR:", a)

// export { forex }

