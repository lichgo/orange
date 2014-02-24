var models = require('../models'),
	Author = models.Author;

function add(req, res, next) {
	var author = new Author(req.body);
	res.send(200);
}

function findById(id, fields, callback) {
	Author.findById(id, fields, callback);
}

function profile(req, res, next) {
	findById(req.params.id, {}, (function(res, next) {
		return function(err, author) {
			if (err) return next(err);
			res.send(author);
		}
	})(res, next));
}

exports.add = add;
exports.findById = findById;
exports.profile = profile;
