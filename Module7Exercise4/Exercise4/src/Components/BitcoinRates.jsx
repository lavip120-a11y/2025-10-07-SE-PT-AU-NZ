import { useContext, useState } from "react";
import { useBitcoinRates } from "../Hooks/useBitcoinRates";
import { Select, MenuItem } from "@mui/material";
import { FormControl, InputLabel } from "@mui/material";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]); //currencies kept in useState
  const exchange = useBitcoinRates(currency); //custom hook returning exchange rate based on user selection of currency

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>

      <FormControl fullWidth>
        <InputLabel id="currency-label">Currency</InputLabel>

        <Select
          labelId="currency-label"
          value={currency}
          label="Currency"
          onChange={(e) => setCurrency(e.target.value)}
        >
          {currencies.map((curr) => (
            <MenuItem value={curr} key={curr}>
              {curr}
            </MenuItem>
          ))}
          ; //user chooses the currency and then currency is updated and
        </Select>
      </FormControl>

      <div style={{ marginTop: "1rem" }}>
        <strong> Exchange = </strong>
        {exchange} {currency}
      </div>
    </div>
  );
}

export default BitcoinRates;
