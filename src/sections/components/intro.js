import React from 'react';

export function Intro(){
    return(
        <div className='intro section dm-shade-1'>
            <div className='headshot'>
                <img 
                src="https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-1/273373554_5406350256061730_8633104913060577024_n.jpg?stp=dst-jpg_p480x480&_nc_cat=109&ccb=1-7&_nc_sid=fe8171&_nc_ohc=PNHeLaxWoYcAX-m9D50&_nc_ht=scontent-dfw5-2.xx&oh=00_AfBbJnKgWhdjEcUkhbbcMQ27Ailg_1VJUHFEc_GCpNRyTA&oe=6529CFFF"
                alt="A photograph of Thomas smiling in front of the ocean." />
                {/* <div className='photo-back'></div> */}
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
                    <img src="/location-icon-dm.png" alt="" />
                    <p> Missouri, USA</p>
                </div>
                <div className='box'>
                    <div className='green-dot'></div>
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