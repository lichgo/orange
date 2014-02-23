var models = require('../models'),
	Author = models.Author;

function add(req, res, next) {
	var author = new Author(req.body);
	res.send(200);
}

function findById(id, fields, callback) {
	Author.findById(id, fields, callback);
}

function profile(id, callback) {

}

exports.add = add;
exports.findById = findById;
exports.profile = profile;
