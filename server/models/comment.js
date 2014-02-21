var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema(
	{
		author: String,
		email: String,
		homepage: String,
		content: String,
		article_id: Objectid
	},
	{
		collection: 'comments'
	}
);

mongoose.model('Comment', CommentSchema);