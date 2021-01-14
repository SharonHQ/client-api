const express = require('express');
const app = express();
const router = express.Router();

const mysqlConnection  = require('../database.js');

/**
 * @swagger
 * /listclients:
 *  get:
 *    description: Use to request all clients
 *    responses:
 *      'default':
 *        description: A successful response
 */
router.get('/listclients', (req, res) => {
  mysqlConnection.query('SELECT * FROM clients', (err, rows, fields) => !err ? res.json(rows) : console.log(err));  
});

/**
 * @swagger
 * /createclient:
 *  post:
 *    description: Use to create client object 
 *    responses:
 *      'default':
 *        description: Client Saved
 */
router.post('/createclient', (req, res) => {
  const {id, name, last_name, birthdate} = req.body;
  console.log(id, name, last_name, birthdate);
  const query = `CALL clientAddOrEdit(?, ?, ?, ?);`;
  mysqlConnection.query(query, [id, name, last_name, birthdate], (err, rows, fields) =>
    !err ? res.json({status: 'Client Saved'}) : console.log(err));
});

/**
 * @swagger
 * /kpiclient:
 *  get:
 *    description: Use to request the standard deviation and the average age of the clients
 *    responses:
 *      'default':
 *        description: A successful response
 */
router.get('/kpiclient', (req, res) => {
  mysqlConnection.query('SELECT * FROM clients', (err, rows, fields) => {
    if(!err) {
      const stats = (data) => {
        const average = (data) => data.reduce((sum, value) => value.age ? sum + value.age : sum + value, 0)/ data.length;
        const standard = Math.sqrt(average(data.map(row => (row.age - average(data)) * (row.age - average(data)))));
      return {"Standard deviation": standard, "Average": average(data)}
      }
      res.json(stats(rows));
    } else {
      console.log(err);  
    }
    
  });
});

module.exports = router;
