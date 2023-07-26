require('dotenv').config()

async function forex() {
const myHeaders = new Headers();
myHeaders.append(process.env.API, process.env.APIKEY);

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

const response = await fetch("https://api.apilayer.com/fixer/convert?to=MYR&from=USD&amount=100", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))

console.log()
}

forex();

