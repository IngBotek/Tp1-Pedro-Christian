var express = require('express');
var router = express.Router();
var postgreClient = require('../postgreSQL/postgreHandler');
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  postgreClient.query('SELECT * FROM temperatura').then(
    (response)=>{
      res.send(response);
      console.log(response)}
  ).catch(
    (error)=>{console.log(error)}
  );
});

module.exports = router;
