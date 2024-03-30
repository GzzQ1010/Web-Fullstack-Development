import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
var bandName = "";
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));

function brandnameGenerator(req,res,next){
  console.log(req.body);
  bandName =req.body["street"]+req.body["pet"];
  next();
}



app.get('/',(req,res)=>{
  res.sendFile(__dirname+"/public/index.html"); 
});

app.use(brandnameGenerator);

app.post('/submit',(req,res)=>{
  res.send(`<h1>Your band name is:</h1><h2>${bandName }✌️</h2>`);
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
 