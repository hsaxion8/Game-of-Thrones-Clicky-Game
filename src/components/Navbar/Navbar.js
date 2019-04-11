import React from "react";
import navBarPic from "./navBarPic.jpg"
import "./Navbar.css";

// Navbar
const Navbar = props => (

    <div id="navbar" className="container-fluid">

        <span className="navItem" id="navbarLeft">
            <img id="navBarPic" src={navBarPic} alt="Navbar logo houses" />
        </span>
        <span className="navItem" id="navbarMiddle">
            <h1 id="guess">The Clicky Game of Thrones Game</h1>
        </span>
        <span className="navItem" id="navbarRight">
                <p className="score">
                    Best Score: {props.topScore}
                </p>
                <p className="score">
                    Score: {props.score}
                </p>
        </span>

    </div>

)

export default Navbar;