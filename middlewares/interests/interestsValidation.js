const { schema } = require('./interestsSchema')
const Ajv = require('ajv')
const addErrors = require('ajv-errors')

const ajv = new Ajv({ allErrors: true })
addErrors(ajv)

const interestsValidation = (req, res, next) => {
  const validate = ajv.compile(schema)
  const valid = validate(req.body)

  if (!valid) {
    console.log('Errores de validación:', validate.errors)
    return res.status(400).send({ data: {}, msg: validate.errors[0].message })
  }

  next()
}

module.exports = {
  interestsValidation
}
