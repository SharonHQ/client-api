const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'us-cdbr-east-03.cleardb.com',
  user: 'b4729a60f4a226',
  password: 'cbf96102',
  database: 'heroku_212ea951d035dff',
  multipleStatements: true
});

mysqlConnection.connect((err) => (err) ? console.error(err) : console.log('db is connected'));

module.exports = mysqlConnection;