import React from 'react';
import Card from './card.js'

export function Portfolio(){

    const testItem = {
        src: "https://images.unsplash.com/photo-1491466424936-e304919aada7?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt:"Cool Photo",
        title:"Great Title",
        description: "Indepth description",
        stack: ["React", "Git", "JS"]
    }
    return(
        <div id="portfolio" className='section dm-shade-1'>
            <p className='section-title'>Portfolio</p>
                <div className='flex buffer'>
                    <Card 
                        src={testItem.src}
                        alt={testItem.alt}
                        title={testItem.title}
                        description={testItem.description}
                        stack={testItem.stack}
                    />
                </div>
        </div>
    )
}

export default Portfolio;