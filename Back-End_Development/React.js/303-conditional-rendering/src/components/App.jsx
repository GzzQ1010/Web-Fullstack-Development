import React from "react";
import Login from "./login";

var LogingStatus= false;

function ConditionalRender({LogingStatus}){
    if(LogingStatus===false){
      return(
        <Login/>            
      );
    }else{
      return(
        <h1>Hello</h1>
      );
    }
}
function App() {
  return (
    <div className="container">
      <ConditionalRender LogingStatus={LogingStatus}/>
    </div>
  );
}

export default App;
