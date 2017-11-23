var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();

app.use(express.static('../Client'));
app.use(bodyParser.urlencoded({ extended : false}));

exports.show_freeList = function(req, res){
    fs.readFile('../Client/freeboard.html', function (error, data) {
        if (error) {
            console.log(error);
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
}