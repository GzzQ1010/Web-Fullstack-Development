import React from "react";
import Sign from "./sign"
import Description from "./description";

function emojiCard(props){
    return (
        <div className="term">
            
            <Sign img={props.img}
                    Name={props.name}/>
        
            
            < Description Meaning={props.meaning}/>
            
        </div>
    )
    
}

export default emojiCard;