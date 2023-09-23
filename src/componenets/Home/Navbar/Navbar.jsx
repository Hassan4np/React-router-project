import { Link, NavLink } from "react-router-dom";

import './navber.css'

const Navbar = () => {
    return (
        
         <nav>
            <NavLink className="" to={"/"}>Home</NavLink>
            <NavLink  className="ml-5" to={"/about"}>About</NavLink>
            <NavLink className="ml-5" to={"/posts"}>Posts</NavLink>
            <NavLink className="ml-5" to={"/contact"}>Contact</NavLink>
            <NavLink className="ml-5" to={"/Titural"}>Titural</NavLink>
            <NavLink className="ml-5" to={"/users"}>Users</NavLink>
        </nav>
    );
};

export default Navbar;