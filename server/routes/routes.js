const sendEmail = require('../sendEmail')
const sendWhatsAppMessage = require("../sendWhatsAppMessage")
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
	sendWhatsAppMessage("+16095539005", "sigh")
	addAppointment.save()
	.then(data => {
		response.json(data)
	})
	.catch(error => {
		response.json(error)
	})
})

router.post("/grouphealthcheck", (request, response) => {
	const bookGroupHealthCheck = new groupHealthCheckTemplateCopy({
		name: request.body.name,
		organization: request.body.organization,
		phone: request.body.phone,
		email: request.body.email,
		selectedDate: request.body.selectedDate,
		request: request.body.request
	})
	sendEmail("info@okbfoundation.org", "New Group Health Check Request", "Group Health Check Request \n\n Name: " + request.body.name + "\nOrganization: " + request.body.organization + "\nPhone Number:" + request.body.phone + "\nEmail: " + request.body.email + "\nDate: " + request.body.selectedDate + "\nRequest: " + request.body.request)
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