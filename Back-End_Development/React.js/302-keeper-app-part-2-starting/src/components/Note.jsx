import React from "react";
import Notes from "../notes";

function createNotes(){
  return( 
  <div>
    {Notes.map(Note)}
  </div>  
  )
};

function NoteCard(props){
  return(
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
    
  )
}

function Note(Note) {
  return (
    <NoteCard 
      key={Note.key}
      title={Note.title}
      content={Note.content}/>
  )
}

export default createNotes;
