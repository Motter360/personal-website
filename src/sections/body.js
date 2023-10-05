import React from "react";

import Skills from "./components/skills";
import AboutMe from "./components/aboutMe";
import Experience from "./components/experience";
import Portfolio from "./components/portfolio";
import Refrences from "./components/references";

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