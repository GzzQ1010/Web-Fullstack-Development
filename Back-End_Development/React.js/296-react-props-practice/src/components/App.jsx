import React from "react";
import contacts from "../contacts";



function Card(props){
  return (<div className="card">
  <div className="top">
    <h2 className="name">{props.Name}</h2>
    <img className="circle-img"
      src={props.img}
      alt="avatar_img"
    />
  </div>
  <div className="bottom">
    <p className="info">{props.tel}</p>
    <p className="info">{props.email}</p>
  </div>
</div>);
};

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((contact) => (
        <Card
          Name={contact.name}
          img={contact.imgURL}
          tel={contact.phone}
          email={contact.email}
        />
      ))}
    </div>
  );
};

export default App;
 

      // <div className="card">
      //   <div className="top">
      //     <h2 className="name">Beyonce</h2>
      //     <img className="circle-img"
      //       src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      //       alt="avatar_img"
      //     />
      //   </div>
      //   <div className="bottom">
      //     <p className="info">+123 456 789</p>
      //     <p className="info">b@beyonce.com</p>
      //   </div>
      // </div>