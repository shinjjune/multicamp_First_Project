var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
  if(req.session.name){
    req.session.destroy(function(err){
      res.redirect('/');
      
    });
  }
});
module.exports = router;
