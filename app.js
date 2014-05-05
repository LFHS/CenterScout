// Modules
var express = require('express');
var consolidate = require('consolidate');
var http = require('http');

// Create ExpressJS instance
var app = express();

// Default port is 8080
app.set('port', process.env.PORT || 8080);

// Define views/ and public/ folders
app.set('views', './views');
app.use(express.static('./public'));

// Setup HandlebarsJS as templating engine
app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');

// Create and start HTTP server
http.createServer(app).listen(app.get('port'), function() {
    console.log('Server started.');
});
