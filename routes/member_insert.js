var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  
  //biz
  console.log("세션ID=",req.sessionID);
  req.session.userid=req.body.userid;
  req.session.loginState=false;
  const result={msg:`${req.body.name}님 가입되셨습니다`};
  res.json(JSON.stringify(result));
});

module.exports = router;
