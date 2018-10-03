var mysql = require('mysql');
var config = require('../modules/module_config.js');

con = config.setupConfiguration(mysql);

con.connect((err) => {
  if (err) throw err;
  con.query("SHOW FULL TABLES", (err, result, fields) => {
    if (err)
      throw err;
    console.log(result);
    console.log('//////////////////////////////////////////////////////////////');
  });
  con.query(('SELECT * FROM general_data'), (err,result) => {
    if (err)
      throw err;
    console.log(result);
    console.log('//////////////////////////////////////////////////////////////');
  });
  con.query(('SELECT * FROM phone_numbers'), (err,result) => {
    if (err)
      throw err;
    console.log(result);
    console.log('//////////////////////////////////////////////////////////////');
  });
  con.query(('SELECT * FROM emails'), (err,result) => {
    if (err)
      throw err;
    console.log(result);
    console.log('//////////////////////////////////////////////////////////////');
  });
});
