import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context/userProvider";

//styling for search field
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
// search icon styles
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
//style for the text inside the search field
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
//
export default function SearchAppBar({ searchTerm, setSearchTerm }) {
  const navigate = useNavigate(); //hook to navigate between pages
  const { currentUser, logout } = useContext(UserContext); //is the user logged in or logged out, accessing UserContext

  //Menu to the left
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  //open menu
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  //close menu
  const handleMenuClose = (path) => {
    setAnchorEl(null);
    if (path) navigate(path);
  };

  //handling the search, if enter is pressed navigate to the path
  const handleSearch = (e) => {
    if (e.key === "Enter")
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* left side menu */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          {/* dropdown menu */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => handleMenuClose()}
          >
            <MenuItem onClick={() => handleMenuClose("/")}>Home</MenuItem>
            {/* if there is a user logged in show dashboard and chat forum, if not show login - home is always displayed above */}
            {currentUser ? (
              [
                <MenuItem key="dash" onClick={() => handleMenuClose("/dash")}>
                  DashBoard
                </MenuItem>,
                <MenuItem key="chat" onClick={() => handleMenuClose("/chat")}>
                  Chat Forum
                </MenuItem>,
                <MenuItem
                  key="logout"
                  onClick={() => {
                    logout(); // clear current user
                    handleMenuClose("/login"); // back to login
                  }}
                >
                  Logout
                </MenuItem>,
              ]
            ) : (
              <MenuItem key="login" onClick={() => handleMenuClose("/login")}>
                Login
              </MenuItem>
            )}
          </Menu>

          {/* title is clickable */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              cursor: "pointer",
              display: { xs: "none", sm: "block" },
            }}
            onClick={() => navigate("/")}
          >
            COMMUNITY VOICE
          </Typography>

          {/* search bar */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>

            <StyledInputBase
              placeholder="Search…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch} //enter to search
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
