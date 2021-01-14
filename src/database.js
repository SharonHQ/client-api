const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'company',
  multipleStatements: true
});

mysqlConnection.connect((err) => (err) ? console.error(err) : console.log('db is connected'));

module.exports = mysqlConnection;