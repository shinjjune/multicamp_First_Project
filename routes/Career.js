var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Career',{
    name:req.session.name,
  loginState:req.session.loginState});
});
module.exports = router