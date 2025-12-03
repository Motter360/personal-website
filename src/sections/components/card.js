import React from "react";

export default function Card(props){
    const {src, alt, title, description, stack} = props;
    return(
        <div className="card">
            <div className="portfolioPhotoSection">
                <div className="spacer">
                    <img className="portfolioPhoto" src={src} alt={alt} width="90%" height="90%"/>
                </div>
            </div>
            <div className="portfolioDetails">
                <h4>{title}</h4>
                <p>{description}</p>
                <ul>
                    {stack.map(item =>(<li>{item}</li>))}
                </ul>
            </div>
        </div>
    )
}