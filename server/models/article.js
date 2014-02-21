var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema(
	{
		position: { type: Number, index: true }
		title: { type: String; unique: true },
		content: String,
		create_date: { type: Date, default: Date.now },
		last_modified: Date,
		comments: [Objectid],
		tags: [Objectid],
		author_id: Objectid
	},
	{
		colllection: 'articles'
	}
);

mongoose.model('Article', ArticleSchema);