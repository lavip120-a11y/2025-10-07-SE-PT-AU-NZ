import { useState, useContext } from "react";
import { useFormInput } from "../Hooks/useFormInput";
import { UserContext } from "../Context/userProvider";
import { Box } from "@mui/material";
import { TextField, Select, MenuItem, Button } from "@mui/material";
import {
  FormControl,
  InputLabel,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  // input state values always need to be strings - empty initially
  const [age, setAge] = useState("");
  const [emailInputProps, resetEmail] = useFormInput("");
  const [passInputProps, resetPassword] = useFormInput("");
  const [result, setResult] = useState("");
  //get useContext - currentUser and handleUpdateUser
  const { currentUser, handleUpdateUser } = useContext(UserContext);
  const navigate = useNavigate();

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
      handleRedirect("/");
    }
  }

  function handleRedirect(path) {
    if (path) navigate(path);
  }

  function logout() {
    handleUpdateUser({});
    setResult("");
  }

  return (
    <>
      <Box display="flex" justifyContent="center" mt={5}>
        {currentUser ? (
          <Button variant="outlined" onClick={logout}>
            Logout
          </Button>
        ) : (
          <Card sx={{ width: 400 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Login
              </Typography>

              <Box
                component="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  FormSubmitted();
                }}
                display="flex"
                flexDirection="column"
                gap={2}
              >
                <TextField
                  fullWidth
                  type="email"
                  label="Email"
                  variant="outlined"
                  {...emailInputProps}
                ></TextField>

                <TextField
                  fullWidth
                  type="password"
                  label="Password"
                  variant="outlined"
                  {...passInputProps}
                ></TextField>

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    value={age}
                    label="Age"
                    onChange={(e) => setAge(e.target.value)}
                  >
                    <MenuItem value={15}>Under Fifteen</MenuItem>
                    <MenuItem value={20}>Sixteen to Twenty</MenuItem>
                    <MenuItem value={30}>Twentyone to Thirty</MenuItem>
                    <MenuItem value={40}>Thirtyone to Fourty</MenuItem>
                    <MenuItem value={50}>Fourtyone to Fifty</MenuItem>
                    <MenuItem value={60}>Fiftyone to Sixty </MenuItem>
                    <MenuItem value={61}>Over 60</MenuItem>
                  </Select>
                </FormControl>

                <Button
                  type="submit"
                  variant="contained"
                  startIcon={<LoginIcon />}
                  sx={{
                    backgroundColor: "secondary.main",
                    color: "primary.contrastText",
                    "&:hover": { backgroundColor: "primary.main" },
                  }}
                >
                  Submit
                </Button>

                {result && (
                  <Typography
                    variant="body2"
                    color={
                      result.includes("successfully")
                        ? "success.main"
                        : "error.main"
                    }
                    sx={{ mt: 1 }}
                  >
                    {result}
                  </Typography>
                )}
              </Box>
            </CardContent>
          </Card>
        )}
      </Box>
    </>
  );
}

export default LoginForm;
