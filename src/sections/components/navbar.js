import React from 'react';

export function Navbar(){

const [showLinks, setShowLinks] = React.useState(false)

const handleClick = () => setShowLinks((oldData) => !oldData)
const toggle = showLinks ? " " : "hide"

const logo = "<TH />"

    return(
        <div>
            <nav className='nav-bar'>
                <p className='logo'>{logo}</p>
                <button className="menu-button" onClick={handleClick}>
                <img src="/menu-icon-dm.png" alt="Menu"/>
                </button>
            </nav>
            <div className={toggle}>
                <ul className='menu'>
                    <li className='links'>About</li>
                    <li className='links'>Work</li>
                    <li className='links'>Testimonials</li>
                    <li className='links'>Contact</li>
                </ul>
                <div className='download'>
                    <button>Download CV</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;