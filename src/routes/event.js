const express = require('express')
const { event } = require('../controllers')
const { upload, multerErrorHandler } = require('../middleware/multer')
const route = express.Router()


// create event route
route.post('/', upload.array('images'), multerErrorHandler, event.createEvent)

module.exports = route