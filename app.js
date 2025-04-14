require('dotenv').config()
const express = require('express')
const app = express()

const compression = require('compression')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const swaggerUi = require('swagger-ui-express')

const swaggerDocs = require('./swagger.js')
const logType = process.env.MORGAN_LOG_TYPE || 'combined'
const routes = require('./routes.js')
const { validateApiKey } = require('./middlewares/auth/apiKeyValidation.js')
const { limiter } = require('./middlewares/limiter/apiLimiter.js')

app.use(cors({
  origin: '*',
  methods: [
    'GET', 'POST'
  ],
  allowedHeaders: ['Content-Type', 'x-api-key']
}))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(helmet())
app.use(compression())
app.use(morgan(logType))
app.use(express.static('public'))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(validateApiKey)
app.use(limiter)
app.use('/api/v1', routes)

module.exports = {
  app
}
