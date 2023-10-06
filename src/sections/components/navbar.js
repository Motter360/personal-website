import React from 'react';



export function Navbar(props){

const displayLinks = props.displayLinks
const handleClick = props.handleClick


const logo = "<TH />"

    return(
        <div>
            <nav className='nav-bar'>
                <p className='logo'>{logo}</p>
                <button className="menu-button" onClick={handleClick}>
                   
                </button>
            </nav>
            <img src="menu-icon-dm.png" alt=""/>
        </div>
    )
}

export default Navbar;