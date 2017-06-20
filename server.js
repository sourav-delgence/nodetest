var express = require('express');
product = require('./product.js');
var app = express();

app.get('/hello', function(req, res){
   res.send("Hello World!");
});

app.use('/product', product);

app.listen(8080);
console.log('Server running..');