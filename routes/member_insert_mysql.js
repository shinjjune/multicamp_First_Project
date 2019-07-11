var express = require('express');
var router = express.Router();
const mysql=require('mysql');

/* GET users listing. */

router.post('/', function(req, res, next) {
  const results={msg:'회원 가입 오류'};

  // console.log("세션iD=",req.sessionID);
  // req.session.email=req.body.email;
  // req.session.loginState=false;
  
let con=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'mysql',
  database:'nodejs'
});

con.connect((err)=>{
  if(err){  
    return console.error(err.message);
  }
  console.log("db연결댐")
  const sql=`insert into member(name,id,comments) values('${req.body.name}','${req.body.userid}','${req.body.comments}')`;
  console.log(sql);
  con.query(sql,(err,result,fields)=>{
    if(err){
      console.error(err.message);
      res.json(JSON.stringify(result));
    }else{
      console.log(results,fields);
      result.msg=`${req.body.name}님 가입되셨습니다.`;
      res.json(JSON.stringify(result));
    }
    con.end((err)=>{
      if(err){
        return console.error(err.message);
      }
    });
  });
});
});
module.exports = router;
