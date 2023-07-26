

//'https://api.luno.com/api/1/ticker?pair=XBTMYR'

async function luno(){
    try {
        const response = await fetch(
            "https://api.luno.com/api/1/ticker?pair=XBTMYR"
        );
        console.log(response);
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
        }
    } catch (err) {
        console.log(err);
    }
}

luno();

