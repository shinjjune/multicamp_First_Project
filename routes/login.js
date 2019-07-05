var express = require('express');
var router = express.Router();

/* GET users listing. */

router.post('/', function(req, res, next) {
  const result={msg:''};
  console.log("세션iD=",req.sessionID);
  if(req.session.name === req.body.name){
    req.session.loginState=true;
    res.redirect('/');
    
  }else{
    result.msg='다시로그인해주세요';
    res.json(JSON.stringify(result));
  }
 

});
module.exports = router;