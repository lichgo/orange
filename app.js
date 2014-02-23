var express = require('express'),
	config = require('./config'),
	routes = require('./server/routes'),
	swig = require('swig');

var app = express();

app.configure('development', function() {
	swig.setDefaults({ cache: false });
});

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/server/views');

app.use(express.bodyParser());

routes.set(app);

app.listen(config.port);