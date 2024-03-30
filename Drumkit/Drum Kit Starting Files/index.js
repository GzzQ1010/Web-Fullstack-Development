var Waudio = new Audio("sounds/crash.mp3");
var Aaudio= new Audio("sounds/kick-bass.mp3");
var Saudio= new Audio("sounds/snare.mp3");
var Daudio= new Audio("sounds/tom-1.mp3");
var Jaudio= new Audio("sounds/tom-2.mp3");
var Kaudio= new Audio("sounds/tom-3.mp3");
var Laudio= new Audio("sounds/tom-4.mp3");

const SoundsArray=[Waudio,Aaudio,Saudio,Daudio,Jaudio,Kaudio,Laudio];

var buttonArray = document.querySelectorAll(".drum");
var NumberofButtons = buttonArray.length; // Ensure this is defined if not already
function Sound(i){
    var audio = SoundsArray[i];     
        audio.play();
};

for (let i = 0; i < NumberofButtons; i++) { 
    buttonArray[i].addEventListener("click", function() {
        Sound(i);
    });  
}


// for(var i=0; i<NumberofButtons;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(i){
//         var audio= new Audio("./sounds/crash.mp3");
//         audio.play;
//     });
// }
