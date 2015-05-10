var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var SubjectSchema = new Schema({
    subjectCode: String,
    subjectNumber: String,
    instructor: String,
    description: String
});

// Export the Mongoose model
mongoose.model('Subject', SubjectSchema);
