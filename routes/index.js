var express = require('express');
var router = express.Router();
let db = require('..//db.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup');
});

router.get('/homepage', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/database', function (req, res) {
// Make a query to the database
db.pools
// Run query
.then((pool) => {
return pool.request()
// This is only a test query, change it to whatever you need
.query( 
      " UPDATE dbo.Customers " 
       + "SET Location = 'South Africa' " 
       + "WHERE CustomerId = 2 "
      ) 

})
// Send back the result
.then(result => {
res.send(result)
})
// If there's an error, return that with some description
.catch(err => {
res.send({
Error: err
})
})
})


module.exports = router;
