var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var SubjectSchema = new Schema({
    subjectId: { 
    	type: String,
    	required: 'Please provide subject code or name',
    	unique: 'Subject already exists'
    },
    users: [
    	{
    		username: {
    			type: String,
    			unique: 'Username already exists'
    		}
    	}
    ]
});

mongoose.model('Subject', SubjectSchema);
