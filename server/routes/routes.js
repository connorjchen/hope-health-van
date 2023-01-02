const sendEmail = require('../sendEmail')
const express = require('express')
const router = express.Router()

const appointmentTemplateCopy = require('../models/appointment.js')
const groupHealthCheckTemplateCopy = require('../models/groupHealthCheckModel.js')
const addPatientTemplateCopy = require('../models/patientsModel.js')

router.post("/appointment", (request, response) => {
	const addAppointment = new appointmentTemplateCopy({
		services: request.body.services,
		location: request.body.location,
		dateTime: request.body.dateTime,
		name: request.body.name,
		phone: request.body.phone,
		okb_id: request.body.okb_id
	})
	sendEmail()
	addAppointment.save()
	.then(data => {
		response.json(data)
	})
	.catch(error => {
		response.json(error)
	})
})

router.post("/grouphealthcheck/appointment", (request, response) => {
	const bookGroupHealthCheck = new groupHealthCheckTemplateCopy({
		name: request.body.name,
		organization: request.body.organization,
		phone: request.body.phone,
		email: request.body.email,
		selectedDate: request.body.selectedDate,
		request: request.body.request
	})
	sendEmail()
	bookGroupHealthCheck.save()
	.then(data => {
		response.json(data)
	})
	.catch(error => {
		response.json(error)
	})
})

router.post("/addPatient", (request, response) => {
	const addPatient = new addPatientTemplateCopy({
		name: request.body.name,
		phone: request.body.phone,
		okb_id: request.body.okb_id,
	})
	addPatient.save()
	.then(data => {
		response.json(data)
	})
	.catch(error => {
		response.json(error)
	})
})  

module.exports = router