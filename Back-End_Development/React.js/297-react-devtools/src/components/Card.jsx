import React from "react";
import AvatarImg from "./AvatarImage";
import Infor from "./infor";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <AvatarImg img={props.img}/>
      </div>
      <div className="bottom">
        <Infor tel={props.tel} email={props.email}/>
      </div>
    </div>
  );
}

export default Card;
