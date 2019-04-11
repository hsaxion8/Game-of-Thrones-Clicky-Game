import React from "react";
import "./Header.css";
import GoT from "./GoT.png";
import GoT2 from "./GoT2.png";
const Header = props => (

    <div id="header" className="container-fluid">

        <span className="headerSection" id="headerLeft">
            <img id="GoT" src={GoT} alt="GoT" />
        </span>

        <span className="headerSection" id="headerMiddle">
            <h4 id="instructions">Click as many characters as possible without clicking the same one!<br></br> And hurry... Winter is Coming!</h4>
        </span>

        <span className="headerSection" id="headerRight">
            <img id="GoT2" src={GoT2} alt="GoT2" />
        </span>

    </div>

)

export default Header;