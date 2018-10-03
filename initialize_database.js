var mysql = require('mysql');

var con = mysql.createConnection({
  host:'localhost',
  user:'sammy',
  password:'B3ch3r-L3g3r'
})

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE lots_of_tables", (err, result) => {
    if (err) throw err;
    console.log("Database created");
  });
});
