const mongoose = require('mongoose')

const mobileVanTemplate = new mongoose.Schema({
	locations: {
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
	previousUse:{
		type: Boolean,
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

module.exports = mongoose.model('mobileVanTable', mobileVanTemplate)