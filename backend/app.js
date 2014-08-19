/*
 *    Modules
 */

var express = require('express');
var http = require('http');
var fs = require('fs');
var powernode = require('./lib/powernode/powernode');

/*
 *    Configuration
 */

var config  = JSON.parse(fs.readFileSync('config.json'));
var version = JSON.parse(fs.readFileSync('package.json')).version;

powernode.setUserAgent('CenterScout/' + version);

/*
 *    ExpressJS Setup
 */

// Create ExpressJS instance
var app = express();

// Default port is 8080
app.set('port', process.env.PORT || 8080);

// Define static/ folder
app.use(express.static('./static'));

// Middleware for POST requests
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

/*
 *    API Endpoints
 */

// Get PowerSchool(R) data
app.get('/api/grades', function(req, res) {
    var username = req.query.username;
    var password = req.query.password;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    powernode
        .getStudentData('chsd115.lfschools.net', username, password)
        .then(JSON.stringify).then(function(data){res.end(data);});
});

// Get assignments from www.lakeforestschools.org
app.get('/api/assignments', function(req, res) {

});

/*
 *    NodeJS Setup
 */

// Create and start HTTP server
// TODO: Use HTTPS http://nodejs.org/api/https.html#https_https_createserver_options_requestlistener
http.createServer(app).listen(app.get('port'), function() {
    console.log('Server started.');
});
