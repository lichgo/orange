var express = require('express'),
	config = require('./config'),
	conn = require('./conn');

var app = express();

app.use(express.bodyParser());

app.listen(config.port);
