/*
 *    Modules
 */
var express = require('express');
var http = require('http');
var fs = require('fs');

/*
 *    Configuration
 */

var config  = JSON.parse(fs.readFileSync('config.json'));
var version = JSON.parse(fs.readFileSync('package.json')).version;

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

var data = [
        {
            'name':  'Chapter 12 TEST',
            'class': 'Math',
            'date':  '02/15',
            'percent': '98%',
            'fraction': '49/50'
        },
        {
            'name':  'Chapter 12 Homework',
            'class': 'Math',
            'date':  '05/29',
            'percent': '100%',
            'fraction': '24/24'
        },
        {
            'name':  'Chapter 12.3 Quiz',
            'class': 'Math',
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
        {
            'name':  'Portfolio Project',
            'class': 'English',
            'date':  '02/15',
            'percent': '98%',
            'fraction': '49/50'
        },
        {
            'name':  'Odyssey TEST',
            'class': 'English',
            'date':  '10/15',
            'percent': '94%',
            'fraction': '94/100'
        },
        {
            'name':  'Odyssey Project',
            'class': 'English',
            'date':  '10/20',
            'percent': '100%',
            'fraction': '50/50'
        },
        {
            'name':  'Chapter 12 TEST',
            'class': 'History',
            'date':  '06/01',
            'percent': '90%',
            'fraction': '45/50'
        },
        {
            'name':  'Chapter 13 TEST',
            'class': 'History',
            'date':  '03/16',
            'percent': '96%',
            'fraction': '46/50'
        }
    ];

// Get PowerSchool(R) data
app.get('/api/grades', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
});

// Get assignments from www.lakeforestschools.org
app.get('/api/assignments', function(req, res) {

});

/*
 *    NodeJS Setup
 */

http.createServer(app).listen(app.get('port'), function() {
    console.log('Server started.');
});
