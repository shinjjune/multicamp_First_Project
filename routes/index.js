var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //biz db...
  //console.log("세션ID=",req.sessionID);

  res.render('index',{
    userid:req.session.userid,
  loginState:req.session.loginState});
});

module.exports = router;
