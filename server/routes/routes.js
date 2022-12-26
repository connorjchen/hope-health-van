const express = require('express')
const router = express.Router()

const labServiceTemplateCopy = require('../models/labServiceModel.js')
const mobileVanTemplateCopy = require('../models/mobileVanModel.js')
const telehealthTemplateCopy = require('../models/telehealthModel.js')
const groupHealthCheckTemplateCopy = require('../models/groupHealthCheckModel.js')
const addPatientTemplateCopy = require('../models/patientsModel.js')

router.post("/labservice/appointment", (request, response) => {
	const bookLabService = new labServiceTemplateCopy({
		tests: request.body.tests,
		dateTime: request.body.dateTime,
		name: request.body.name,
		phone: request.body.phone,
		previousUse: request.body.previousUse,
		medicalRecord: request.body.medicalRecord
	})
	bookLabService.save()
	.then(data => {
		response.json(data)
	})
	.catch(error => {
		response.json(error)
	})
})

router.post("/mobilevan/appointment", (request, response) => {
	const bookMobileVan = new mobileVanTemplateCopy({
		locations: request.body.locations,
		dateTime: request.body.dateTime,
		name: request.body.name,
		phone: request.body.phone,
		previousUse: request.body.previousUse,
		medicalRecord: request.body.medicalRecord
	})
	bookMobileVan.save()
	.then(data => {
		response.json(data)
	})
	.catch(error => {
		response.json(error)
	})
}) 

router.post("/telehealth/appointment", (request, response) => {
	const bookTelehealth = new telehealthTemplateCopy({
		services: request.body.services,
		dateTime: request.body.dateTime,
		name: request.body.name,
		phone: request.body.phone,
		previousUse: request.body.previousUse,
		medicalRecord: request.body.medicalRecord
	})
	bookTelehealth.save()
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
		referenceId: request.body.referenceId,
		name: request.body.name,
		phone: request.body.phone,
		email: request.body.email,
		dob: request.body.dob,
		emergencyContact: request.body.emergencyContact,
		medicalRecord: request.body.medicalRecord,
		history: request.body.history,
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