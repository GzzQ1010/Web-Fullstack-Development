// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.
// numbers.map(function(num){
//     return num*num;
// });
// //Filter - Create a new array by keeping the items that return true.

// //Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber= numbers.reduce(function(Accumulate,currentNumber){
//     return Accumulate+=currentNumber;
// })
//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.


// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import emojipedia from "./emojipedia";

// const newArray=emojipedia.map(function(emoji){
//     return emoji.meaning.substring(0,100);
// });

//Arrow function format
const newArray=emojipedia.map(emoji => emoji.meaning.substring(0,100) );

console.log(newArray[0].length);
