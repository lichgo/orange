var models = require('../models'),
	Author = models.Author;

function add(req, res, next) {
	var author = new Author(req.body);
	author.save((function(res, next) {
		return function(err, author) {
			if (err) return next(err);
			res.send(200);
		}
	})(res, next));
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

function list(req, res, next) {
	Author.find({},  (function(res, next) {
		return function(err, authors) {
			if (err) return next(err);
			res.send(authors);
		}
	})(res, next));
} 

exports.add = add;
exports.findById = findById;
exports.profile = profile;
exports.list = list;
