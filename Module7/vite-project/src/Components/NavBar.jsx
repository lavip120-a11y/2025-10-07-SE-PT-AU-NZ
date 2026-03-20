import { NavLink } from 'react-router-dom';
import "../App.css";
import { useContext } from 'react';
import { UserContext } from '../Context/UserProvider';

export default function NavBar() {
const { currentUser } = useContext(UserContext)
return (
    <>
<nav className="NavBar">
    <ul className="menu">
<li><NavLink to="/">Home</NavLink></li>
<li><NavLink to="/dash">Dashboard</NavLink></li>
<li><NavLink to="/about">About</NavLink></li>
<li><NavLink to="/posts">Posts</NavLink></li>
<li><NavLink to="/login">Login</NavLink></li>
{currentUser!=null && currentUser.user ? (
    <li>
    <NavLink to="/Contact">Contact</NavLink>
</li> ) : null}
</ul> {" "}
</nav>
</>
);
}


