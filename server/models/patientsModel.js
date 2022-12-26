const { v4: uuidv4 } = require('uuid')
const mongoose = require('mongoose')

const patientsTemplate = new mongoose.Schema({
	_id:{
		type: String,
		default: () => uuidv4(),
	},
	referenceId: {
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
	email: {
		type: String,
		required: true
	},
	dob: {
		type: String,
		required: true
	},
	emergencyContact: {
		type: Array,
		"default": [],
		required: true
	},
	medicalRecord: {
		type: String,
		required: false
	},
	history: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('patientsTable', patientsTemplate)