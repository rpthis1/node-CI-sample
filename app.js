var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('Page Loaded..');
})

app.listen(4000);