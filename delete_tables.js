var mysql = require('mysql');
var config = require('./modules/module_config');

var con = config.setupConfiguration(mysql);

con.connect((err) => {
  if (err)
    throw err;
  let query = "DROP TABLE IF EXISTS general_data";
  con.query(query, (err, result) => {
    if (err)
      throw err;
    console.log(result);
  });
  query = "DROP TABLE IF EXISTS phone_numbers";
  con.query(query, (err, result) => {
    if (err)
      throw err;
    console.log(result);
  });
  query = "DROP TABLE IF EXISTS emails";
  con.query(query, (err, result) => {
    if (err)
      throw err;
    console.log(result);
  });
});
