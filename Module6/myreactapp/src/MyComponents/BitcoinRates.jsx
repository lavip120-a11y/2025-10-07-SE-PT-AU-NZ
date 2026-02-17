import { useContext, useState } from "react";
import { useBitcoinRates } from "../hooks/useBitcoinRates";
import { MoodContext } from "./MoodProvider";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
const [currency, setCurrency] = useState(currencies[0]); //currencies kept in useState
const exchange = useBitcoinRates(currency); //custom hook returning exchange rate based on user selection of currency
const { emoji } = useContext(MoodContext); //accessing the mood context to get the current emoji


const options = currencies.map(curr => 
<option value={curr} key={curr}>{curr}
</option>);
//user chooses the currency and then currency is updated and 

return (
<div className="BitcoinRates componentBox">
<h3>Bitcoin Exchange Rate with Emoji mood based on user interaction</h3>

<label>Choose currency:
<select value={currency} 
onChange={e => setCurrency(e.target.value)}
>
{options} 
</select>
</label>
<div>
    <strong>Currency: </strong>
    {exchange} {emoji}
</div>
</div>
);
}

export default BitcoinRates;