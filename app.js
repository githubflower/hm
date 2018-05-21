var express = require('express');
var session = require('express-session');
var bodyparser = require('body-parser');
var history = require('connect-history-api-fallback');

var i = 0;
var app = express();
var router = express.Router();

console.log('----------------');

// app.use(express.static('D:/zjie/hm/dist'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
	extended: false
}));

app.use(history({
	 index: '/',
	  rewrites: [
		    { from: /\/login/, to: '/login'}
	 ]
}));

app.use(session({
	secret: 'hm_session',
	// name: 'hm',
	resave: true,
	saveUninitialized: true,
	cookie: {
		path: '/',
		httpOnly: true,
		secure: true,
		maxAge: 1000 * 60 * 5
	}
}));
app.get('/login', function(req, res){
	console.log('---login--1-');
	res.location('/login');
	// next();
	res.end();
});
app.get('/login/', function(req, res){
	console.log('---login--2-');
	res.end();
});

app.use('/login', function(req, res, next){
	console.log('-------success');
	res.end();
});
app.use('/login/', function(req, res, next){
	console.log('-------success');
	res.end();
});

app.all('/', function(req, res, next){
	if(req.originalUrl === '/login'){
console.log('sleep...');
next();
		return;
	}
	if(req.session && req.session.userName){
		next();
	}else{
		i++;
		if(i >=5){
			// res.send('T.T');
			res.end();
			return;
		}
		console.log('-----------2');
		console.log('-----Url------' + req.url);
		console.log('-----baseUrl------' + req.baseUrl);
		console.log('-----originalUrl------' + req.originalUrl);
		res.redirect('/login');
		// res.end();
		// return;
		// next();
		// res.redirect('/#/po');
		// res.redirect('/login');
	}
});

app.use('/', function(req, res, next){
	i++;
	console.log(i, req.url);
	console.log('---app.use / ');
	if(i <= 3){
		console.log('---' + i , req.originalUrl);
		// res.redirect('/login');
		res.location('/login');
		res.location('https://baidu.com');
		res.end();
	}else{
		next();
		
	}
	// res.end();
});

// 指定静态资源
app.use(express.static('D:/projekt/hm/dist'));
console.log('-----------static');


app.use(function timeLog(req, res, next) {
  console.log('app.use Time: ', Date.now());
  next();
});

router.use(function timeLog(req, res, next) {
  console.log('router.use Time: ', Date.now());
  next();
});

app.get('/a', function(req, res) {
    res.send('Hello Boy!');
});
app.get('/b', function(req, res) {
    res.send('Hello Girl!');
});



// 访问任意页面前检查session
/*router.use(function(req, res, next){
	console.log(req.session.userName);
	if(req.session.userName){
		next();
	}else{
		console.log('-----------2');
		redirect('/a');
		// redirect('/login');
	}
});*/



//访问登录页面


var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});