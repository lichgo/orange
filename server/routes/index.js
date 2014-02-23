var controllers = require('../controllers'),
	articleCtrl = controllers.article,
	authorCtrl = controllers.author,
	commentCtrl = controllers.comment,
	tagCtrl = controllers.tag,
	indexCtrl = controllers.index,
	dashboardCtrl = controllers.dashboard;

function setRoutes(app) {
	// index
	app.get('/', indexCtrl.home);
	app.get('/index', indexCtrl.home);
	app.get('/home', indexCtrl.home);
	app.get('/homepage', indexCtrl.home);

	// dashboard
	app.get('/admin', dashboardCtrl.home);

	// author
	app.get('/author/:id', authorCtrl.profile);
	app.post('/author', authorCtrl.add);
}