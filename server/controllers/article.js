var models = require('../models'),
	Article = models.Article;

function add(req, res, next) {
	var article = new Article(req.body);
	article.save(function(err, article) {
		if (err) return res.send(err.err);
		res.send(article);
	})
}

function show(req, res, next) {
	Article.findById(req.params.id, {}, function(err, article) {
		if (err) return res.send(err.err);
		res.send(article);
	})
}

exports.add = add;
exports.show = show;