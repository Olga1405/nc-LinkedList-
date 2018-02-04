var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

app.get('/', function(req,res){
    res.sendfile(__dirname + '/public/index.html');
});

app.get('/stylesheets/style.css', function(req,res){
    res.sendfile(__dirname + '/public/stylesheets/style.css');
});

app.get('/javascripts/main.js', function(req,res){
    res.sendfile(__dirname + '/public/javascripts/main.js');
});

app.get('/images/white-arrow.gif', function(req,res){
    res.sendfile(__dirname + '/public/images/white-arrow.gif');
});

app.get('/images/btn-slide.gif', function(req,res){
    res.sendfile(__dirname + '/public/images/btn-slide.gif');
});

module.exports = app;

app.listen(3000, function () {
    console.log('Listening on port 3000...');
});
module.exports = app;