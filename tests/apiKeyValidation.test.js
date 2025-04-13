const { app } = require('../app')
const request = require('supertest')

describe('Api key Validation', () => {
  it('should response status error 401 with invalid api key', async () => {
    const response = await request(app)
      .post('/api/v1/interests/calcular-intereses')
      .set('X-API-KEY', 'invalid')
      .send({
        principal: 1000,
        tasa_anual: 0.05,
        periodos: 3
      })

    expect(response.status).toBe(401)
    expect(response.body).toEqual({
      error: 'Authentication failed'
    })
  })

  it('should response status error 401 without api key', async () => {
    const response = await request(app)
      .post('/api/v1/interests/calcular-intereses')
      .send({
        principal: 1000,
        tasa_anual: 0.05,
        periodos: 3
      })

    expect(response.status).toBe(401)
    expect(response.body).toEqual({
      error: 'API key is missing'
    })
  })
})
