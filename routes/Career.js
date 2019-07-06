var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Career',{
    userid:req.session.userid,
  loginState:req.session.loginState});
});
module.exports = router
