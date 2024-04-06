import React, {useState} from "react";

function App() {
  const [Yourname,setYourname]=useState("");
  const [name,setName]=useState("");
  function handleChange(event){
    setName(event.target.value);
  };
  function onClick(event){
    setYourname(name);
    event.preventDefault();
  };
  return (
    <div className="container">
      <form onSubmit={onClick}>
        <h1>Hello {Yourname}</h1>
        <input type="text" placeholder="What's your name?" onChange={handleChange} value={name}/>
        <button type="submit">Submit</button>
      </form>
      

{/* default behavior of form components in HTML. They refresh in order to submit, make a POST request or make
a GET request and refreshes the page.And what happens is when you click on the button inside the form, 
especially if this is the Submit button, then it actually triggers a method on the form called onSubmit. */}
    </div>
  );
}

export default App;
