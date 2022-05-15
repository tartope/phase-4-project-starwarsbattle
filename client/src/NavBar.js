import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import "./NavBar.css"

function NavBar({user, setUser}) {
    let navigate = useNavigate();

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
            navigate("/");
            console.log('logout success')
          alert (`Goodbye`)
          }
        });
      }

    //   if (!user) return null;

    return (
        <div className="whole-nav" >
            { user ? <button className="logout-btn" onClick = {handleLogoutClick} > Logout </button> : null }
            <h3 className="nav-header" >STAR WARS: BATTLE OF THE KNOWN UNIVERSE</h3>
            <div className="nav">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                { user ? <NavLink to="/mainpage"> Main Page </NavLink> : null }
                { user ? <NavLink to="/newcharacterform">Add Character</NavLink> : null }
                <NavLink to="/login"> Login/Sign Up </NavLink>
            </div>
        </div>
    )
}

export default NavBar;