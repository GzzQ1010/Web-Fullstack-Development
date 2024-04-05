import React from "react";

function info(props){
    return (
      <div className="info">
        <p >{props.tel}</p>
        <p >{props.email}</p>
      </div>  
    )
};

export default info;