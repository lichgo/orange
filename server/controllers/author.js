var models = require('../models'),
	Author = models.Author;

function add(req, res, next) {
	var author = new Author(req.body);
	author.save(function(err, author) {
		if (err) return res.send(err.err);
		res.send(author);
	});
}

function profile(req, res, next) {
	Author.findById(req.params.id, {}, function(err, author) {
		if (err) return res.send(err.err);
		res.send(author);
	});
}

function list(req, res, next) {
	Author.find({}, function(err, authors) {
		if (err) return res.send(err.err);
		res.send(authors);
	});
}

exports.add = add;
exports.profile = profile;
exports.list = list;
