const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'us-cdbr-east-03.cleardb.com',
  user: 'b4729a60f4a226',
  password: 'cbf96102',
  database: 'heroku_212ea951d035dff',
  multipleStatements: true
});

var connection;

function handleDisconnect() {
  connection = mysql.createConnection(mysqlConnection); 

  connection.connect(function(err) {              
    if(err) {                                     
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); 
    }                                     
  });
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect();                         
    } else {                                      
      throw err;                                  
    }
  });
}

handleDisconnect();

module.exports = mysqlConnection;