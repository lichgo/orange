var mongoose = require('mongoose'),
	ObjectId = mongoose.Schema.ObjectId;

var CommentSchema = new mongoose.Schema(
	{
		author: String,
		email: String,
		homepage: String,
		content: String,
		article_id: ObjectId
	},
	{
		collection: 'comments'
	}
);

mongoose.model('Comment', CommentSchema);