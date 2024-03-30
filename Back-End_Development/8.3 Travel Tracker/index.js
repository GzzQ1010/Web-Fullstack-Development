import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db= new pg.Client({
  user:"postgres",
  host:"localhost",
  database:"World",
  password:"Zzq19981126!",
  port:5432,
});

db.connect();




app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  try{
    var visitedCountries=[];
    let result= await db.query("SELECT country_code FROM visited_countries");
    result.rows.forEach((Country=>{
      visitedCountries.push(Country.country_code);
    }))
    res.render("index.ejs",{countries:visitedCountries, total:visitedCountries.length});
  }catch(err){
    console.error(err);
    res.status(500).send("Query error");
  }
});

function Insert(country_code){
  db.query("INSERT INTO visited_countries(country_code) VALUES($1)",
  [country_code]);
}
app.post('/add', async (req, res) => {
  let inputCountry = req.body['country'];
  // try {
    let countryCode = await db.query("SELECT country_code FROM countries WHERE country_name = $1", [inputCountry]);
    if(countryCode.rows.length > 0){
      await Insert(countryCode.rows[0].country_code);
      res.redirect('/');
    }else{
      res.render("index.ejs",{
        countries:visitedCountries,
        total:visitedCountries.length,
        error:"Please enter a valid country name",
      });
    }
  // } catch (err) {
  //   console.error(err);
  //   res.status(500).send("Query error 2");
  // }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


