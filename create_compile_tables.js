var mysql = require('mysql');
var config = require('./modules/module_config.js');
var compile = require('./modules/module_compile_tables.js');

var con = config.setupConfiguration(mysql);

// console.log(con);

con.connect((err) => {
  if (err)
    throw err;
  console.log('Connected!');

  let query = 'CREATE TABLE general_data (ID INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), surname VARCHAR(255))';
  con.query(query, (err, result) => {
    if (err)
      throw err;
    console.log('general_data created!');
  });

  query = 'CREATE TABLE phone_numbers (ID int AUTO_INCREMENT PRIMARY KEY, general_data_ID INT,prefix INT, phone_number VARCHAR(255), phone_number_descrition VARCHAR(255))';
  con.query(query, (err, result) => {
    if (err)
      throw err;
    console.log('phone_numbers created!');
  });

  query = 'CREATE TABLE emails (ID INT AUTO_INCREMENT PRIMARY KEY, general_data_ID INT, email VARCHAR(255), email_description VARCHAR(255))';
  con.query(query, (err, result) => {
    if (err)
      throw err;
    console.log('emails created!');
  });
  compile.compileTables(con);
});
