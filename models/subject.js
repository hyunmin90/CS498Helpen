var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var SubjectSchema = new Schema({
    subjectId: { 
    	type: String,
    	required: 'Please provide subject code or name',
    	unique: 'This subject has already been created already'
    },
    users: [
    	{
    		username: {
    			type: String,
    			unique: 'This username has already been used'
    		}
    	}
    ]
});

mongoose.model('Subject', SubjectSchema);
