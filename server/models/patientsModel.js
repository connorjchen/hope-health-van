const { v4: uuidv4 } = require('uuid')
const mongoose = require('mongoose')

const patientsTemplate = new mongoose.Schema({
	_id:{
		type: String,
		default: () => uuidv4(),
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

module.exports = mongoose.model('patientsTable', patientsTemplate)