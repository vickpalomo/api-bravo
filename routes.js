require('dotenv').config()
const express = require('express')
const interests = require('./routes/interestsRoutes')
const jokes = require('./routes/jokesRoutes')

const router = express.Router()
router.use('/interests', interests)
router.use('/jokes', jokes)

module.exports = router
