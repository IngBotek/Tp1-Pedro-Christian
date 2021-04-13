const { PayloadTooLarge } = require('http-errors');
const { Pool } = require('pg');
var format = require('pg-format');
 
const pool = new Pool({
  user: 'christian',
  host: 'localhost',
  database: "nodePractica_db",
  password: "jazmin36105059",
  port: 5432,
});

pool.on('error', (err, client) => {
  console.error('Error:', err);
});




module.exports = pool;
