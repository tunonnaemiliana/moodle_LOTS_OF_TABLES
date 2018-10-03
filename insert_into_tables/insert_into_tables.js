const mysql = require('mysql');
const http = require('http');
const config = require('../modules/module_config.js');

var con = config.setupConfiguration(mysql);

var html = '<html><body></body></html>';

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write();
});
