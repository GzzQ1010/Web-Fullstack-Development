import React ,{useState} from "react";

function App() {
  var [mouseOver,SetMouseover]=useState(false);

 
  function Mouseover(){
    SetMouseover(true);
    console.log(mouseOver);
  };
  function Mouseout(){
    SetMouseover(false);
  };
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor:mouseOver?"black":"white"}} onMouseOver={Mouseover} onMouseOut={Mouseout}>Submit</button>
    </div>
  );
}

export default App;
