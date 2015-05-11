var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
    	type: String,
    	required: 'Please provide your name'
    },
    username: {
    	type: String,
    	required: 'Please provide username',
    	unique: 'This username has already been used'
    },
    email: {
    	type: String,
    	required: 'Please provide email',
    	unique: 'This email address has already been used'
    },
    password: {
    	type: String,
    	required: 'Please provide a password'
    },
    subject: {
        type: String,
    },
    dateCreated: { 
    	type: Date,
    	default: Date.now
    }
});

mongoose.model('User', UserSchema);