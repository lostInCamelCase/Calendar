var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'calendar'
});

connection.connect((err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('Connected to DB')
  }
});

module.exports = connection;