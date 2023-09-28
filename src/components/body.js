import React from "react";

import Skills from "./skills";
import AboutMe from "./aboutMe";
import Experience from "./experience";
import Portfolio from "./portfolio";
import Refrences from "./references";

function Body(){
    return(
        <div>
            <Skills />
            <AboutMe />
            <Experience />
            <Portfolio />
            <Refrences />
        </div>
    )
}

export default Body;