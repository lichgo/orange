var mongoose = require('mongoose');

var AuthorSchema = new mongoose.Schema(
	{
		username: { type: String, unique: true }
		pwssword: String,
		email: { type: String, unique: true },
		realname: String,
		avatar: String,
		signup_date: { type: Date, default: Date.now },
		last_signin: Date
	},
	{ 
		collection: 'authors' 
	}
);

mongoose.model('Author', AuthorSchema);