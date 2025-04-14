require('dotenv').config()
const express = require('express')
const interests = require('./routes/interestsRoutes')
const jokes = require('./routes/jokesRoutes')
const weather = require('./routes/weatherRoutes')

const router = express.Router()
router.use('/interests', interests)
router.use('/jokes', jokes)
router.use('/weather', weather)

module.exports = router
