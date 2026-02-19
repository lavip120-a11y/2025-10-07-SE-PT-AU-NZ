import { createTheme } from "@mui/material/styles";
// creates a new theme that overrides  any defaults

export const MyTheme = createTheme({
  palette: {
    primary: {
      main: "#374151",
      contrastText: "#15803D",
      light: "#F3F4F6",
      dark: "#2C5282",
    },
    secondary: { main: "#9CA3AF", contrastText: "#374151" },
    background: { default: "#a8cae0", paper: "#F3F4F6" },
  },

  typography: {
    fontFamily: "Rethink Sans Reg",
    fontSize: 16,
    h1: { fontSize: 30 },
  },
  shape: { borderRadius: 0 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: { color: "inherit", textDecoration: "none" }, //link inherits
      },
    },
    MuiButton: { defaultProps: { variant: "contained" } },
    MuiTextField: { defaultProps: { variant: "filled" } },
  },
});
