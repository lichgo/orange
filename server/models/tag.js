var mongoose = require('mongoose');

var TagSchema = new mongoose.Schema(
	{	
		name: { type: String, unique: true },
		identity: { type: String, unique: true },
		created_by: Objectid
		created_date: { type: Date, default: Date.now }
	},
	{
		collection: 'tags'
	}
);

mongoose.model('Tag', TagSchema);