var mongoose = require('mongoose'),
	conn = require('../conn');

require('./article');
require('./author');
require('./comment');
require('./tag');

exports.Article = mongoose.model('Article');
exports.Author = mongoose.model('Author');
exports.Comment = mongoose.model('Comment');
exports.Tag = mongoose.model('Tag');