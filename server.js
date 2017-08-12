
var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();

app.enable('etag');
app.set('etag', 'strong');
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/dist'));

/*
app.set('views', __dirname + '/private');
app.set('view engine', 'ejs'); // set up ejs for templating
app.engine('.html', ejs.renderFile);
app.get("/",function(req,res){
	res.render('git/index.html',{page_name:"git"});
});
app.get("/git",function(req,res){
	res.render('git/index.html',{page_name:"git"});
});
app.get("/linux",function(req,res){
	res.render('linux/index.html',{page_name:"linux"});
});
app.get("/sitemap.html",function(req,res){
	res.render('sitemap.html',{page_name:"sitemaap"});
});
*/

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});