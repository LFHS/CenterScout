/*
 *    Modules
 */
 
var express = require('express');
var Q = require('q');
var http = require('http');
var fs = require('fs');
var powernode = require('./lib/powernode');

/*
 *    Configuration
 */
 
var config  = JSON.parse(fs.readFileSync('config.json'));
var secrets = JSON.parse(fs.readFileSync('secrets.json'));
var version = JSON.parse(fs.readFileSync('package.json')).version;

powernode.setAppString('CenterScout v' + version);

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

/*
 *    API Endpoints
 */
 
// Get PowerSchool(R) data
app.get('/api/grades', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    powernode
        .getStudentData('chsd115.lfschools.net', username, password)
        .then(JSON.stringify).then(res.end);
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
