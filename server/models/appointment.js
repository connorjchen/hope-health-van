const mongoose = require('mongoose')

const appointmentTemplate = new mongoose.Schema({
	services: {
		type: Array,
		"default": [],
		required: true
	},
	location: {
		type: String,
		required: false
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
	okb_id: {
		type: String,
		required: false
	},
	date: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('appointmentTable', appointmentTemplate)