import promptSync from 'prompt-sync'; 



export async function userInput() 
{
    let prompt = promptSync(); 
    const input = prompt('Please type out the desired currency code (in uppercase, e.g ETH): ');
    return input;
}

// export async function userCurrency()
// {
//     let currency = await userInput();
//     return currency;
// }