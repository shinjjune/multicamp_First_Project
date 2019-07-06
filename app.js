var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session=require('express-session');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('cookieparser!!'));
app.use(session({resave:false,//재할당
  saveUninitialized:false,//저장 내용 없으면 할당 받지 않겠다?
  secret:'cookieparser!!',
  cookie:{
    httpOnly:true,
    secure:false,
    maxAge:(30*60*1000)
  }
  }));



app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/member_insert', require('./routes/member_insert'));
app.use('/Career', require('./routes/Career'));
app.use('/BlockChain', require('./routes/BlockChain'));
app.use('/login', require('./routes/login'));
app.use('/logout', require('./routes/logout'));
app.use('/search_insur_temp', require('./routes/search_insur_temp'));
app.use('/search_insur', require('./routes/search_insur'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
