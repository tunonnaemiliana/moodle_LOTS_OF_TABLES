const http = require('http');
const mysql = require('mysql');

var pool = mysql.createPool({
  host: 'localhost',
  user: 'sammy',
  password: 'B3ch3r-L3g3r',
  database: 'lots_of_tables',
  charset: 'utf8'
});

var htmlStringtoRender = '';

function table(query) {
  pool.query(query, (err, response, fields) => {
    if (err)
      throw err;
    response = JSON.stringify(response);
    response = JSON.parse(response);

    let keys = Object.keys(response[0]);

    htmlStringtoRender += '<table align=\'center\' border=\'1\'>';

    htmlStringtoRender += '<tr>'
    for (let i = 0; i < keys.length; i++) {
      htmlStringtoRender += '<th>' + keys[i] + '</th>';
    }
    htmlStringtoRender += '</tr>';

    for (let i = 0; i < response.length; i++) {
      let values = Object.values(response[i]);
      htmlStringtoRender += '<tr>';
      for (let j = 0; j < values.length; j++) {
        htmlStringtoRender += '<td>';
        htmlStringtoRender += JSON.stringify(values[j]);
        htmlStringtoRender += '</td>';
      }
      htmlStringtoRender += '</tr>';
    }
    //console.log('WoW:'+htmlStringtoRender);
  });
}

(compileString = () => {
  htmlStringtoRender = '<html><head></head><body>';

  query = 'SELECT * FROM general_data';
  table(query);
  query = 'SELECT * FROM phone_numbers';
  table(query);
  query = 'SELECT * FROM emails';
  table(query);

  htmlStringtoRender += '</body></html>';
})();

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(htmlStringtoRender);
  // console.log('2:'+htmlStringtoRender);
  res.end();
});

server.listen(8080, (err) => {
  if (err)
    throw err;
  console.log('Server running at //localhost:8080/');
})
