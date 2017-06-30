var express = require('express')
var pug = require('pug')
var app = express()

app.use(express.static('public'))

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  console.log(req.headers.host+req.url);
  res.sendFile(__dirname + '/view/pages/home.html');
})

// respond with "hello world" when a GET request is made to the homepage
app.get('/archive', function (req, res) {
  console.log(req.headers.host+req.url);
  res.sendFile(__dirname + '/view/pages/archive.html');
})

// respond with "hello world" when a GET request is made to the homepage
app.get('/admin', function (req, res) {
  console.log(req.headers.host+req.url);
  res.sendFile(__dirname + '/view/pages/admin.html');
})

// Handle 404
app.use(function(req, res) {
  res.status(404).sendFile(__dirname + '/view/pages/404.html');
  console.log(req.headers.host+req.url+" status: 404");
});

// Handle 500
app.use(function(error, req, res, next) {
  res.status(500).sendFile(__dirname + '/view/pages/500.html');
  console.log(req.headers.host+req.url+" status: 500");
});

app.listen(3000, function () {
  console.log('Server Listening at: http://localhost:3000')
})