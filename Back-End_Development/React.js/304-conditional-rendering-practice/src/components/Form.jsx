import React from "react";
import Login from "./login";
import Register from "./Register";

function Form(props) {
  return (
    props.RegisterStatus ? <Login/> : <Register/>
  );
}

export default Form;
