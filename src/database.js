const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'us-cdbr-east-03.cleardb.com',
  user: 'b4729a60f4a226',
  password: 'cbf96102',
  database: 'heroku_212ea951d035dff',
  multipleStatements: true
});

mysqlConnection.connect((err) => (err) ? setTimeout(handleDisconnect(), 2000): console.log('db is connected'));
mysqlConnection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      handleDisconnect();                        
    } else {            
      throw err; 
    }
  });

handleDisconnect();

module.exports = mysqlConnection;