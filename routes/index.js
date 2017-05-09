var express = require('express');
var router = express.Router();
// to get the json data
const data = require('../public/json/data.json');

// Set to root path
router.get('/', function(req, res, next) {
  res.render('index', { cafe: data, title: "Cafe Prices" });
});


module.exports = router;
