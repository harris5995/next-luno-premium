import promptSync from 'prompt-sync'; 
const prompt = promptSync(); 
const currency = prompt('Please type out the desired currency: ');

console.log(currency);
console.log(typeof(currency))
