const mongoose = require('mongoose')

const telehealthTemplate = new mongoose.Schema({
	services: {
		type: Array,
		"default": [],
		required: true
	},
	dateTime: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	medicalRecord: {
		type: String,
		required: false
	},
	date: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('telehealthTable', telehealthTemplate)