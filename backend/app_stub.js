/*
 *    Modules
 */

var express = require('express');
var Q = require('q');
var http = require('http');
var fs = require('fs');
//var powernode = require('./lib/powernode');

/*
 *    Configuration
 */

var config  = JSON.parse(fs.readFileSync('config.json'));
//var secrets = JSON.parse(fs.readFileSync('secrets.json'));
var version = JSON.parse(fs.readFileSync('package.json')).version;

//powernode.setAppString('CenterScout v' + version);

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

var data = [
        {
            'name':  'Chapter 12 TEST',
            'class': 'M',
            'date':  '02/15',
            'percent': '98%',
            'fraction': '49/50'
        },
        {
            'name':  'Chapter 12 Homework',
            'class': 'M',
            'date':  '05/29',
            'percent': '100%',
            'fraction': '24/24'
        },
        {
            'name':  'Chapter 12.3 Quiz',
            'class': 'M',
            'date':  '05/30',
            'percent': '86%',
            'fraction': '26/30'
        },
        {
            'name':  'Phone Case Project',
            'class': 'CAD',
            'date':  '06/01',
            'percent': '100%',
            'fraction': '30/30'
        },
        {
            'name':  'Machine Vise Project',
            'class': 'CAD',
            'date':  '03/16',
            'percent': '100%',
            'fraction': '30/30'
        },
        
    ];

// Get PowerSchool(R) data
app.get('/api/grades', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // powernode
    //     .getStudentData('chsd115.lfschools.net', username, password)
    //     .then(JSON.stringify).then(res.end);
    res.end(JSON.stringify(data));
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
