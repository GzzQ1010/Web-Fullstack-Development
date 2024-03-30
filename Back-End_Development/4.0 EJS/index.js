import express from "express";
import {dirname} from 'path';
import { fileURLToPath } from "url";

const __dirname=dirname(fileURLToPath(import.meta.url));
const today=new Date("March 23, 2024");
var day=today.getDay();

const app=express();
const port=3000;

app.get('/',(req,res)=>{
    if(day===0||day===6){
        res.render("index.ejs",
        {day:"weekend",
        recommend:"Take a break"})
    }else{
        res.render("index.ejs",
        {day:"weekday",
        recommend:"Hard work"})
    }
});

app.listen(port,()=>{
    console.log(`Listening on port ${port}.`);
});
