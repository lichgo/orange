var mongoose = require('mongoose'),
	ObjectId = mongoose.Schema.ObjectId;

var TagSchema = new mongoose.Schema(
	{	
		name: { type: String, unique: true },
		identity: { type: String, unique: true },
		created_by: ObjectId,
		created_date: { type: Date, default: Date.now }
	},
	{
		collection: 'tags'
	}
);

mongoose.model('Tag', TagSchema);