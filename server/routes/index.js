var controllers = require('../controllers'),
	articleCtrl = controllers.article,
	authorCtrl = controllers.author,
	commentCtrl = controllers.comment,
	tagCtrl = controllers.tag,
	systemCtrl = controllers.system,
	homeCtrl = controllers.home,
	dashboardCtrl = controllers.dashboard;

function set(app) {
	// system
	app.get('/system', systemCtrl.home);

	// index
	app.get('/', homeCtrl.home);
	app.get('/index', homeCtrl.home);
	app.get('/home', homeCtrl.home);
	app.get('/homepage', homeCtrl.home);

	// dashboard
	app.get('/admin', dashboardCtrl.home);

	// author
	app.get('/author/profile/:id', authorCtrl.profile);
	app.get('/author/list', authorCtrl.list);
	app.post('/author', authorCtrl.add);

	// article
	app.post('/article', articleCtrl.add);
	app.get('/article/:id', articleCtrl.show);

	// *
	app.get('*', function(req, res, next) {
		res.send(404);
	});
}

exports.set = set;