var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ReviewSchema = new Schema({
	buildingName: {
		type: String,
		requird: 'Please provide the building name'
		unique: 'Same building name exist'
	},
	rating: {
		type: Number,
		required: 'Please provide the rating',
		min: 1,
		max: 10
	}
});


mongoose.model('Review', ReviewSchema);

/*
username
array of building names, ratings (key value)


building names
long, latitude
*/