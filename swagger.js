const swaggerJsDoc = require('swagger-jsdoc')
require('dotenv').config()

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Bravo API',
      version: '1.0.0',
      description:
        'Bravo API',
      license: {
        name: 'MIT'
      },
      contact: {
        name: 'Swagger'
      }
    },
    servers: [
      {
        url: `http://localhost:${process.env.APP_PORT}`
      },
      {
        url: ''
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          name: 'Authorization',
          in: 'header',
          scheme: 'bearer'
        }
      }
    }
  },
  apis: ['./routes/*.js', './routes.js', './server.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)

module.exports = swaggerDocs
