import React from "react";
import emojipedia from "../emojipedia";
import EmojiCard from "./emojiCard"


function CreatCard(emoji){
    return(
        <EmojiCard
        key={emoji.id}
        img={emoji.emoji}
        name={emoji.name}
        meaning={emoji.meaning}
        />
    )
};

function emojiCards(){
    return(
        <dl className="dictionary">
            {emojipedia.map(CreatCard)}
        </dl>
        
    )
}
export default emojiCards;