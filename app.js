var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('HTML Page here......');
})

app.listen(4000);