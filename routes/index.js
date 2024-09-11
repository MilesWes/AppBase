var express = require('express');
var router = express.Router();

const launchTime = new Date("09/21/2024 12:00").getTime()


/* GET home page. */
router.get('/', function(req, res, next) {
  const currentTime = new Date().getTime()
  const numMilliseconds = parseInt(launchTime - currentTime)
  res.render('index', { title: 'A Banking App', countDown: numMilliseconds});
});

module.exports = router;
