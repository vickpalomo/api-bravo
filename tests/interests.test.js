const { app } = require('../app')
const request = require('supertest')

describe('Interests Controller', () => {
  it('should calculate interest compound with valid data', async () => {
    const response = await request(app)
      .post('/api/v1/interests/calcular-intereses')
      .send({
        principal: 1000,
        tasa_anual: 0.05,
        periodos: 3
      })

    expect(response.status).toBe(200)
    expect(response.body['monto_total']).toBe(1157.63)
    expect(response.body.detalles_solicitud).toEqual({
      principal: 1000,
      tasa_anual: 0.05,
      periodos: 3
    })
  })
})
