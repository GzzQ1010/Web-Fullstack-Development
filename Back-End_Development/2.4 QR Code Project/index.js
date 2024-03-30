/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer.prompt([
  {
    type:'url',
    message:'Does this works?',
    name:'input', //name is always required; and it cannot be ''.
  },
]).then((answers)=>{
  console.log(JSON.stringify(answers,null,' '));
  const Input=answers.input;
  console.log(Input);
  var qr_img= qr.image(Input);
  qr_img.pipe(fs.createWriteStream('created.png'));
  fs.writeFile('message.txt',Input,(err)=>{
    if(err) throw err;
    console.log("The file has saved successfully");
  });
});
