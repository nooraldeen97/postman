import { createElement } from "react";


export function HelloWorldSample({ nameText,AgeText}) {

    
    return <div className="widget-hello-world">My name is 
    <h4  style={{"color":"blue"}}>{nameText}</h4>
     and my Age is :
     <h4 style={{"color":"red"}}>{AgeText}</h4> 
    </div>;
}
