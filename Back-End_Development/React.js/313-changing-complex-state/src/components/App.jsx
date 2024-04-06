import React, {useState} from "react";

function App() {
  const [Fname,setFname]=useState("");
  const [Lname,setLname]=useState("");
  const [FirstName,setF]=useState("");
  const [LastName,setL]=useState("");
function fNameChange(event){
  setFname(event.target.value);
}
function lNameChange(event){
  setLname(event.target.value);
}
function handleClick(event){
  setF(Fname);
  setL(Lname);
  event.preventDefault();
};

  return (
    <div className="container">
      <h1>Hello {FirstName} {LastName}</h1>
      <form onSubmit={handleClick}>
        <input name="fName" placeholder="First Name" onChange={fNameChange} value={Fname}/>
        <input name="lName" placeholder="Last Name" onChange={lNameChange} value={Lname}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
