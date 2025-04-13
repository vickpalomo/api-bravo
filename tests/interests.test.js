const { app } = require('../app')
const request = require('supertest')

describe('Interests Controller', () => {
  it('should calculate interest compound with valid data', async () => {
    const response = await request(app)
      .post('/api/v1/interests/calcular-intereses')
      .set('X-API-KEY', '42IuTguij6KMv7KTV8MppveAkF6HGAC024d7Z4nKvNkMdKC7jSF3Aas0Ai12wev0')
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

  it('should response status error 400 without require data', async () => {
    const response = await request(app)
      .post('/api/v1/interests/calcular-intereses')
      .set('X-API-KEY', '42IuTguij6KMv7KTV8MppveAkF6HGAC024d7Z4nKvNkMdKC7jSF3Aas0Ai12wev0')
      .send({
        principal: 1000,
        tasa_anual: 0.05
      })

    expect(response.status).toBe(400)
    expect(response.body).toEqual({
      data: {},
      msg: 'Field periodos is require.'
    })
  })

  it('should response status error 400 with invalid data', async () => {
    const response = await request(app)
      .post('/api/v1/interests/calcular-intereses')
      .set('X-API-KEY', '42IuTguij6KMv7KTV8MppveAkF6HGAC024d7Z4nKvNkMdKC7jSF3Aas0Ai12wev0')
      .send({
        principal: 0,
        tasa_anual: 0.05,
        periodos: 3
      })

    expect(response.status).toBe(400)
    expect(response.body).toEqual({
      data: {},
      msg: 'Field principal must be greater than 0.01'
    })
  })

  it('should response status error 400 with aditional data', async () => {
    const response = await request(app)
      .post('/api/v1/interests/calcular-intereses')
      .set('X-API-KEY', '42IuTguij6KMv7KTV8MppveAkF6HGAC024d7Z4nKvNkMdKC7jSF3Aas0Ai12wev0')
      .send({
        principal: 1000,
        tasa_anual: 0.05,
        periodos: 3,
        test: 'test'
      })

    expect(response.status).toBe(400)
    expect(response.body).toEqual({
      data: {},
      msg: 'Dont allow aditional properties'
    })
  })
})
