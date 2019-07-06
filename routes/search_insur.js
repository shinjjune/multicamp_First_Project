var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  //biz
  const searchType=req.body.searchType;
  const insur_input=req.body.insur_input;
  const result={msg:''};
  
  if(searchType && insur_input){//정상처리
    //if(searchType=="차량번호"||searchType=="차대번호"){
      const insur_info={
        "보험명":"100세까지 암보험",
        "소액암":"600만원",
        "유방암":"1200만원",
        "전립선암":"1200만원",
        "일반암":"6000만원",
        "고액암":"1억 2000만원",
        
    };
    result.msg=insur_info;
    res.json(JSON.stringify(result));
/*     }
    else{
      result.msg=`조회결과가 없습니다`
      res.json(JSON.stringify(result));
    } */
  }else{//에러 처리
    result.msg=`조회결과가 없습니다`
    res.json(JSON.stringify(result));
  }
});

module.exports = router;