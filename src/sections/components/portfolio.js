import React from 'react';
import Card from './card.js'
import data from '../../data/portfolioData.js';

export function Portfolio(){

    return(
        <div id="portfolio" className='section dm-shade-1'>
            <p className='section-title'>Portfolio</p>
                <div className='flex column center buffer'>
                    {data.map(item => <Card 
                            src={item.src}
                            alt={item.alt}
                            title={item.title}
                            description={item.description}
                            stack={item.stack}
                            link={item.link}
                        />)
                    }
                </div>
        </div>
    )
}

export default Portfolio;