const express = require('express');
const router = express.Router()
const event = require('./event')

// database connection
require('../database/database')

// attach all events routes
router.use('/events', event)

module.exports = router