require('dotenv').config()
const express = require('express')
const interests = require('./routes/interestsRoutes')

const router = express.Router()
router.use('/interests', interests)

module.exports = router
