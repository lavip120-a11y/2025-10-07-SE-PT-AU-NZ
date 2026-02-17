import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import { useContext } from 'react';
import { UserContext } from '../Context/UserProvider';

export default function NavBar() {
const { currentUser } = useContext(UserContext)

return (
    <>
<Box component="nav" sx={{
    backgroundColor: 'primary.main',
    color: 'primary.contrastText',
    py: 1, '& a': {
        color: "primary.contrastText", 
        textDecoration: "none",
        px: 2,
        '&.active': {fontWeight: 'bold' }
    }
}}
>

<ul style={{ display: 'flex', justifyContent: 'center', listStyle: "none", margin: 0, padding: 0 }} >
<li><NavLink to="/">Home</NavLink></li>
<li><NavLink to="/login">Login</NavLink></li>
<li><NavLink to="/rates">Bitcoin Rates</NavLink></li>
{/* this is hiding the contact if there is no user logged in. I do not have a contact page at this stage */}
{/* {currentUser!=null && currentUser.user ? (
    <li>
    <NavLink to="/Contact">Contact</NavLink>
</li> ) : null}
</ul> {" "} */}
</ul>
</Box>
</>
);
}


