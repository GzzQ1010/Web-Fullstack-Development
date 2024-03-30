import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from "passport";
import { Strategy as localStrategy } from "passport-local";



const app = express();
const port = 3000;
const saltRounds = 10;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
  session({
    secret:"key_Words",
    resave:false,
    saveUninitialized:true,
    cookie:{
      maxAge:1000*60*60*24
    }
}));

app.use(passport.initialize());// initializes Passport for use in your application. 
app.use(passport.session());//use sessions to maintain persistent login sessions.

const db= new pg.Client({
  user:"postgres",
  host:"localhost",
  database:"Users",
  password:"Zzq19981126!",
  port:5432,
});
db.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.get("/secrets",(req,res)=>{
  console.log("position2",req.user);
  if(req.isAuthenticated()){
    res.render("secrets.ejs");
  }else{
    res.redirect("/login");
  }
})

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
    } else {
      //hashing the password and saving it in the database
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
        } else {
          console.log("Hashed Password:", hash);
          const result= await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
            [email, hash]
          );
          const user=result.rows[0];
          req.logIn(user,(err)=>{
            console.log(err);
            res.redirect( "/secrets");
          })
          // res.render("secrets.ejs");
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", passport.authenticate("local", {
  successRedirect: "/secrets",
  failureRedirect: "/login",
}));


/*passport can automatically through the use of this verify() function, grab hold of the username and password
from the form that submits the login request.*/
passport.use(new localStrategy(async function verify(username,password,cb){
      try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      username,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedHashedPassword = user.password;
      bcrypt.compare(password, storedHashedPassword, (err, result) => {
        if (err) {
          return cb(err);
        } else {
          if (result) {
            console.log("position1",user);
            return cb(null,user);
          } else {
            // res.send("Incorrect Password");
            return cb(null,false);
          }
        }
      });
    } else {
      res.send("User not found");
    }
  } catch (err) {
    console.log(err);
  }
}));
/*serializeUser determines what user information should be stored in the session
The provided callback (cb in your example, commonly done in documentation) is called with the user data that should be stored in the session.
You would store just the user ID or a minimal set of user identifiers in the session to keep it lightweight.
passport.serializeUser((user, cb) => {
  cb(null, user.id); // Just store the user ID in the session
});
*/
passport.serializeUser((user,cb)=>{
  cb(null,user);
});

/* used to retrieve this information and convert it back into a user object on each request, allowing you to access req.user in your route handlers.
the code below is simply passing the user object (or whatever was stored in the session) directly through without any additional lookup or transformation. */
passport.deserializeUser((user,cb)=>{
  cb(null,user);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
