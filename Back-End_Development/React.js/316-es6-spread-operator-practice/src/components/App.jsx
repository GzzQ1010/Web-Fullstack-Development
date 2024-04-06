import React, {useState} from "react";
import List from "./Todos";

function App() {
const [ToList,setToList]=useState([]);
const [InlineText,setText]=useState("");
function handleChange(event){
  setText(event.target.value);
}
function handleClick(){
  setToList([...ToList, InlineText]);
}
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <List Todos={ToList}/>
    </div>
  );
}

export default App;
{/* <div>
        <ul>
          <li>A Item</li>
        </ul>
      </div> */}