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
	var articleId = req.params.id;

	Article.findById(articleId, {}, function(err, article) {
		if (err) return res.send(err.err);
		res.render('article', {
			article: article
		});
	})
}

function list(req, res, next) {
	Article.find({}, function(err, articles) {
		if (err) return res.send(err.err);
		res.send(articles);
	});
}

function update(req, res, next) {
	var articleId = req.params.id,
		data = req.body;

	Article.findOneAndUpdate({ _id: articleId }, data, {}, function(err, article) {
		res.send(200);
	});
}

exports.add = add;
exports.show = show;
exports.update = update;
exports.list = list;