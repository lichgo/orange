var mongoose = require('mongoose'),
	ObjectId = mongoose.Schema.ObjectId;

var ArticleSchema = new mongoose.Schema(
	{
		position: { type: Number, index: true },
		title: { type: String, unique: true },
		content: String,
		create_date: { type: Date, default: Date.now },
		last_modified: Date,
		comments: [ObjectId],
		tags: [ObjectId],
		author_id: ObjectId
	},
	{
		colllection: 'articles'
	}
);

mongoose.model('Article', ArticleSchema);