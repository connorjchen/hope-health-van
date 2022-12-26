const mongoose = require('mongoose')

const labServiceTemplate = new mongoose.Schema({
	tests: {
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
	previousUse: {
		type: Boolean,
		required: true,
		default: false
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

module.exports = mongoose.model('labServiceTable', labServiceTemplate)