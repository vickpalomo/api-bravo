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

app.use(cors({
  origin: '*',
  methods: [
    'GET', 'POST'
  ],
  allowedHeaders: ['Content-Type']
}))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(compression())
app.use(morgan(logType))
app.use(express.static('public'))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use('/api/v1', routes)

module.exports = {
  app
}
