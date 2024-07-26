import React from 'react';

export function Navbar(){

const [showLinks, setShowLinks] = React.useState(false)

const handleClick = () => setShowLinks((oldData) => !oldData)
const toggle = showLinks ? " " : "hide"

const logo = "<TH />"

function Options(props){
    return(
            <div className={props.designation}>
                <div className='row'>
                    <ul className='menu dm-shade-1'>
                        <li className='links'><a href='#about-me'>About</a></li>
                        <li className='links'><a href='#contact'>Contact</a></li>
                    </ul>
                    <div className='download dm-shade-1'>
                        <a href="/Thomas_Hammon_Tech_Resume.pdf" download={"Thomas_Hammon_CV"}>Download CV</a>
                    </div>
                </div>
            </div>
    )
}



return(
    <div className='header dm-shade-1'>
        <nav className='nav-bar dm-shade-1'>
            <p className='logo'>{logo}</p>
            <button className="menu-button" onClick={handleClick}>
            <img src="/menu-icon-dm.png" alt="Menu"/>
            </button>
            <Options 
                designation="wide"
            />
        </nav>
        <Options 
            designation={toggle}
        />
    </div>
)
}

export default Navbar;