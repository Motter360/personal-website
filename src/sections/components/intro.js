import React from 'react';

export function Intro(){
    return(
        <div className='intro'>
            <div className='headshot'>
                <img 
                src="https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-1/273373554_5406350256061730_8633104913060577024_n.jpg?stp=dst-jpg_p480x480&_nc_cat=109&ccb=1-7&_nc_sid=fe8171&_nc_ohc=PNHeLaxWoYcAX-m9D50&_nc_ht=scontent-dfw5-2.xx&oh=00_AfBbJnKgWhdjEcUkhbbcMQ27Ailg_1VJUHFEc_GCpNRyTA&oe=6529CFFF"
                alt="A photograph of Thomas smiling in front of the ocean." />
  
            </div>
            <h2 className='myName'>Hello, I'm Thomas 👋</h2>
            <p>I'm a self-taught front end web developer (React) 
                looking to expand my horizons and grow my skill set. Pleased to meet you!  
            </p>
        </div>
    )
}

export default Intro;