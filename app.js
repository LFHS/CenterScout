var express = require('express');
var consolidate = require('consolidate');

var app = express();

app.set('port', process.env.PORT || 8080);

app.set('views', './views');
app.use(express.static('./public'));

app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
