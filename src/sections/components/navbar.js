import React from 'react';



export function Navbar(props){

const displayLinks = props.displayLinks
const handleClick = props.handleClick


const logo = "<TH />"

    return(
        <div>
            <nav className='nav-bar'>
                <p className='logo'>{logo}</p>
                <button onClick={handleClick}><img src=".//assets/hamburgericon.svg" alt=""/></button>
            </nav>
        </div>
    )
}

export default Navbar;