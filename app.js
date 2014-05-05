var express = require('express');
var consolidate = require('consolidate');
var http = require('http');

var app = express();

app.set('port', process.env.PORT || 8080);

app.set('views', './views');
app.use(express.static('./public'));

app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');

http.createServer(app).listen(app.get('port'), function() {
    console.log('Server started.');
});
