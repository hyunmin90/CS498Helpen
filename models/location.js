var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var LocationSchema = new Schema({
	buildingName: {
		type: String,
		required: 'Please provide name of building'
	},
	longitude: {
		type: String,
		required: 'Please provide longitude of location'
	},
	langitude; {
		type: String,
		required: 'Please provide langitude of location'
	},
	rating: {
		type: String,
		required: 'Please provide the rating'
	},
	numberOfParticipant: {
		type: String
	}
});


mongoose.model('Location', LocationSchema);