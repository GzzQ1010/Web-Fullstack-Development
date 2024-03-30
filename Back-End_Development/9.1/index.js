import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db= new pg.Client({
  user:"postgres",
  host:"localhost",
  database:"Users",
  password:"Zzq19981126!",
  port:5432,
});

db.connect(); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});




app.post("/register", async (req, res) => {
  const email= req.body['username'];
  const password=req.body['password'];
  if(email.length==0||password.length==0){
    res.redirect('/register');
  }else{
    try{
      const matchCount= await db.query("SELECT email FROM users WHERE email=$1",[email]);
      if(matchCount.rowCount==0){
        await db.query("INSERT INTO users(email,password) VALUES($1,$2)",[email,password]);
        res.render("secrets.ejs");
      }else{
        res.send("Email has already been registered");
      }
    }catch(err){
      console.error("failed to insert");
    }
  }
 
});

app.post("/login", async (req, res) => {
  const email= req.body['username'];
  const password=req.body['password'];
  if(email.length==0||password.length==0){
    // res.redirect('/login');
  }else{
    const dbmatch= await db.query("SELECT email password FROM users WHERE email=$1 AND password =$2",[email,password]);
    console.log(dbmatch);
    if(dbmatch.rowCount!=0){
      res.render("secrets.ejs");
    }else{
      res.send("email or password incorrect");
      // res.redirect('/login?error=incorrect');
      
    }
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
 