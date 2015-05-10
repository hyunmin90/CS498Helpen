var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var SubjectSchema = new Schema({
    subjectCode: { 
    	type: String,
    	required: 'Please provide course code'
    },
    subjectNumber: {
    	type: String,
    	required: 'Please provide course number'
    },
    instructor: {
    	type: String
    },
    description: {
    	type: String
    }
});

mongoose.model('Subject', SubjectSchema);
