var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("세션id=",req.sessionID);
  res.render('index',{name : req.session.name, loginState:req.session.loginState});//응답
});

module.exports = router;