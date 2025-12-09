import React from "react";

export default function Card(props){
    const {src, alt, title, description, stack, link} = props;
    return(
        <div className="card">
            <div className="portfolioPhotoSection">
                <a href={link}>
                    <img src={src} alt={alt} width="100%" height="100%"/>
                </a>
            </div>
            <div className="portfolioDetails">
                <h4>{title}</h4>
                <p>{description}</p>
                <ul className="flex wrap">
                    {stack.map(item =>(<li>{item}</li>))}
                </ul>
            </div>
        </div>
    )
}