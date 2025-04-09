const schema = {
  type: 'object',
  properties: {
    principal: {
      type: 'number',
      minimum: 0.01,
      errorMessage: {
        minimum: 'Field principal must be greater than 0.01',
        pattern: 'El valor de principal no debe tener más de dos decimales'
      }
    },
    tasa_anual: {
      type: 'number',
      minimum: 0.01,
      maximum: 1,
      errorMessage: {
        minimum: 'Field tasa_anual must be greater than 0.01',
        maximum: 'Field tasa_anual must be less than or equal to 1'
      }
    },
    periodos: {
      type: 'integer',
      minimum: 1,
      errorMessage: {
        minimum: 'Field periodos must be greater than or equal to 1',
        type: 'Field periodos must be integer'
      }
    }
  },
  required: ['principal', 'tasa_anual', 'periodos'],
  additionalProperties: false,
  errorMessage: {
    required: {
      principal: 'Field principal is require.',
      tasa_anual: 'Field tasa_anual is require.',
      periodos: 'Field periodos is require.'
    },
    additionalProperties: 'Dont allow aditional properties'
  }
}

module.exports = {
  schema
}
