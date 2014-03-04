var controllers = require('../controllers'),
	articleCtrl = controllers.article;

function home(req, res, next) {
	articleCtrl.list(req, res, next);
}

exports.home = home;