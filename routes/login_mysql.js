var express = require('express');
var router = express.Router();
const mysql=require('mysql');//1 드라이버 등록

/* post login 처리 */
router.post('/', function(req, res, next) {
  const result={msg:''};

  const con=mysql.createConnection({//2 연결
    host:'localhost',
    user:'root',
    password:'mysql',
    database:'nodejs'
  });

  con.connect((err)=>{
    if(err){
      return console.error(err.message);
    }
    console.log("DB연결됨:",req.body.email);  
    const sql=
    `select * from member where id='${req.body.email}'`;
    console.log(sql);// 3 구문 생성
    con.query(sql,(err,rs,fields)=>{ //4 SQL 전송
      if(err){
        console.error(err.message);
        result.msg='다시 로그인해주세요';
        res.json(JSON.stringify(result));        
      }else{
        if(rs[0] && rs[0].name){//로그인 ok
          console.log(rs[0].name);
          req.session.userid=req.body.email;
          req.session.name=rs[0].name;
          req.session.loginState=true;
          res.redirect('/');
        }else{// 로그인 fail
          result.msg='다시 로그인해주세요';
          res.json(JSON.stringify(result)); 
        }
      }//end else
      con.end((err)=>{
        if(err){
          return console.error(err.message);
        }
        console.log("con close");
      });  //end end
    });//end query
  });//end connect
  //biz
  /* const result={msg:''};
  console.log("세션ID=",req.sessionID); 
  console.log(myDB);
  if(myDB[req.body.login_user_id]){
    req.session.regenerate((err)=>{ 
      req.session;
      console.log("세션ID=",req.sessionID);
      req.session.user_id=req.body.login_user_id;
      req.session.name=myDB[req.body.login_user_id].name;
      res.redirect('/');
    });
  }else{
    result.msg='다시 로그인해주세요';
    res.json(JSON.stringify(result));
  } */
  

});//end post

module.exports = router;
