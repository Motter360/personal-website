import React from "react";

import Navbar from "./components/navbar";
import Intro from "./components/intro";

function Header(props){
    const displayLinks = props.displayLinks
    const handleClick = props.handleClick

    return (
    <div>
        <Navbar 
        displayLinks= {displayLinks}
        handleClick= {() => handleClick()}
        />
        <Intro />
    </div>
    )
}

export default Header;