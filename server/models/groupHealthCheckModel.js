const mongoose = require('mongoose')

const groupHealthCheckTemplate = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	organization: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	selectedDate: {
		type: String,
		required: true
	},
	request: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('groupHealthCheckTable', groupHealthCheckTemplate)