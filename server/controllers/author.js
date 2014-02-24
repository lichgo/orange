var models = require('../models'),
	Author = models.Author;

function add(req, res, next) {
	var author = new Author(req.body);
	author.save(function(err, author) {
		if (err) return next(err);
		res.send(200);
	});
}

function findById(id, fields, callback) {
	Author.findById(id, fields, callback);
}

function profile(req, res, next) {
	findById(req.params.id, {}, function(err, author) {
		if (err) return next(err);
		res.send(author);
	});
}

function list(req, res, next) {
	Author.find({}, function(err, authors) {
		if (err) return next(err);
		res.send(authors);
	});
} 

exports.add = add;
exports.findById = findById;
exports.profile = profile;
exports.list = list;
