import React from "react";

function sign(props){
    return(
        <dt>
            <span className="emoji" role="img" aria-label={props.Name}>
              {props.img}
            </span>
            <span>{props.Name}</span>
        </dt>
    )
}
export default sign;
