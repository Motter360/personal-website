import React from 'react';

export function Intro(){
    return(
        <div className='intro section dm-shade-1'>
            <div className='headshot'>
                <img 
                src="/Thomas_Hammon_Headshot_2.jpg"
                alt="A photograph of Thomas smiling in front of the ocean." />
            </div>
            <h2 className='myName'>Hello, I'm Thomas 👋</h2>
            <p>I'm a self-taught front end web developer (React) 
                looking to expand my horizons and grow my skill set. 
                If you're looking for a self starter with a passion 
                for learning and problem solving, I'm your guy. 
                Pleased to meet you!  
            </p>
            <div className='location'>
                <div className='box'>
                    <div className="container">
                        <img src="/location-icon-dm.png" alt="" />
                    </div>
                    <p> Missouri, USA</p>
                </div>
                <div className='box'>
                    <div className="container">
                        <div className='green-dot'></div>
                    </div>
                    <p>Available for new projects</p>
                </div>
            </div>
            <div className='socails'>
                <a target="_blank" href='https://github.com/Motter360' rel="noopener noreferrer">
                    <img className="github medium" src="/github-icon-dm.png" alt="github logo and link" />
                </a>
                <a target="_blank" href='https://www.linkedin.com/in/thomas-hammon-063366290' rel="noopener noreferrer">
                    <img className="linkedin small"src="/linkedin-icon-dm.png" alt="linked in logo and link" />
                </a>
            </div>
        </div>
    )
}

export default Intro;