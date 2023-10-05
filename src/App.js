import React, {useState} from "react";

import Header from "./sections/header";
import Body from "./sections/body";
import Footer from "./sections/footer";

function App() {

  const [showLinks, setShowLinks] = useState(false)

  
  


  return ( 
    <div>
      <Header 
        displayLink= {showLinks}
        handleClick= {() => setShowLinks(()=> !showLinks)}
      />
      <Body />
      <Footer /> 
    </div>
  );
}

export default App;
