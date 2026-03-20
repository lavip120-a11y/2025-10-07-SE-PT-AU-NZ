import { useState } from "react";
import { TextField, Checkbox, Select, MenuItem, Button } from "@mui/material";
import { FormControl, FormControlLabel, InputLabel } from "@mui/material";

export default function MUIForm() {
  const [age, setAge] = useState(10);
  return (
    <form>
      <TextField
        required
        id="outlined-required"
        label="Greeting"
        defaultValue="Hello World"
      />
      <div>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Uncheck Me"
      />
      </div>
      <FormControl>
        <InputLabel>Age</InputLabel>
        <Select value={age} onChange={(e) => setAge(e.target.value)}>
          <MenuItem value={10}>Under Fifteen</MenuItem>
          <MenuItem value={20}>Fifteen to Twenty</MenuItem>
          <MenuItem value={30}>Twenty to Thirty</MenuItem>
        </Select>
      </FormControl>
      <div>
      <Button variant="contained">Submit</Button>
      </div>
    </form>
  );
}
