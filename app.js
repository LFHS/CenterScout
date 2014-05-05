/*
 *    Modules
 */
var express = require('express');
var consolidate = require('consolidate');
var http = require('http');

/*
 *    ExpressJS Setup
 */

// Create ExpressJS instance
var app = express();

// Default port is 8080
app.set('port', process.env.PORT || 8080);

// Define views/ and public/ folders
app.set('views', './views');
app.use(express.static('./static'));

// Setup HandlebarsJS as templating engine
app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');

// Middleware for POST requests
app.use(express.json());

/*
 *    API Endpoints
 */

// Attempt to log the user in
app.post('/api/login', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var remember = req.body.remember;


});

// Get a list of classes and basic information about each
app.get('/api/grade/class/list', function(req, res) {

});

// Get grades for a classes
app.get('/api/grade/class/detail', function(req, res) {

});

/*
 *    NodeJS Setup
 */

// Create and start HTTP server
http.createServer(app).listen(app.get('port'), function() {
    console.log('Server started.');
});
