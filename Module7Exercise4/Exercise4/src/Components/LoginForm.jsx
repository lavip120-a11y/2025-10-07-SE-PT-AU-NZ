import { useState, useContext } from "react";
import { useFormInput } from "../Hooks/useFormInput";
import { UserContext } from "../Context/UserProvider";
import { Box } from "@mui/material";
import { TextField, Select, MenuItem, Button } from "@mui/material";
import { FormControl, InputLabel } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

function LoginForm() {
  // input state values always need to be strings - empty initially
  const [age, setAge] = useState("");
  const [emailInputProps, resetEmail] = useFormInput("");
  const [passInputProps, resetPassword] = useFormInput("");
  const [result, setResult] = useState("");
  //get useContext - currentUser and handleUpdateUser
  const { currentUser, handleUpdateUser } = useContext(UserContext);

  function FormSubmitted() {
    //validating email and password entries
    if (emailInputProps.value.length < 5)
      setResult("Email cannot be less than 5 characters");
    else if (passInputProps.value.length < 4)
      setResult("Password cannot be less than 4 characters");
    else if (!age) setResult("Please select an age range");
    else {
      handleUpdateUser({
        user: emailInputProps.value, //store the user information in the context
        age: age,
      });

      resetEmail();
      resetPassword();
      setAge("");
      setResult("User logged in successfully");
    }
  }

  function logout() {
    handleUpdateUser({});
    setResult("");
  }

  return (
    <>
      {currentUser.user ? (
        <Button variant="outlined" onClick={logout}>
          Logout
        </Button>
      ) : (
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            FormSubmitted();
          }}
          sx={{ 
            minWidth: 120,
          backgroundColor: 'primary.light', 
        color: 'primary.contrastText', 
      p: 3,
    borderRadius: 2
   }}
        >
          <FormControl>
            <TextField
              fullWidth
              type="e-mail"
              label="Email"
              variant="outlined"
              margin="normal"
              {...emailInputProps}
            ></TextField>
            <TextField
              fullWidth
              type="password"
              label="Password"
              variant="outlined"
              margin="normal"
              {...passInputProps}
            ></TextField>
<FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={(e) => setAge(e.target.value)}
            >
              <MenuItem value={15}>Under Fifteen</MenuItem>
              <MenuItem value={20}>Fifteen to Twenty</MenuItem>
              <MenuItem value={30}>Twenty to Thirty</MenuItem>
              <MenuItem value={40}>Thirty to Fourty</MenuItem>
              <MenuItem value={50}>Fourty to Fifty</MenuItem>
              <MenuItem value={60}>fifty to Sixty Plus</MenuItem>
              <MenuItem value={61}>Over 60</MenuItem>
            </Select>
</FormControl>
            <Button
              type="submit"
              // variant="contained"
              // color="secondary"
              startIcon={<LoginIcon />}
              sx={{ 
                mt: 2, 
              backgroundColor: 'secondary.main',
            color: 'secondary.contrastText', 
          '&:hover': { backgroundColor: 'secondary.dark' }
         }}
            >
              Submit
            </Button>
          </FormControl>

          <div>
            <Box component="label" color="secondary.main"></Box>
            <label>{result}</label>
          </div>
        </Box>
      )}
    </>
  );
}

export default LoginForm;
