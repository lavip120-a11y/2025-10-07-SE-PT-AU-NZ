import { useState, useEffect } from "react";

export function useBitcoinRates(currency) {
const [exchange, setExchange] = useState("");

useEffect(() => { //function returned from useEffect is run on unmount and used to cleanup side effects
    console.log("running effect");
    let ignore = false; //cleanup logic

fetch( `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
)
.then((response) => response.json())
.then((json) => { 
    if (!ignore) setExchange(json.bitcoin[currency.toLowerCase()]);
})
.catch(err => console.error("failed to fetch bitcoin currency"));

return () => {
    ignore = true; //cleanup logic
    console.log("cleanup called");
};
}, [currency]);

return exchange;
}