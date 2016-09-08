var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended:false});

app.listen('3000','localhost',function(){
  console.log('server is listening on 3000');
});
app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
});
app.use(express.static('public'));

app.post('/texter', urlEncodedParser,function(req, res){
  console.log('texter hit'+req.body);
  res.send('texter response');
});
