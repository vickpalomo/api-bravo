const { app } = require('../app')
const request = require('supertest')

describe('Rate Limit Test', () => {
  it('should allow up to 5 requests and then block the 6th', async () => {
    // 6 requests should be OK
    for (let i = 0; i < 6; i++) {
      const res = await request(app)
        .post('/api/v1/interests/calcular-intereses')
        .set('X-API-KEY', '42IuTguij6KMv7KTV8MppveAkF6HGAC024d7Z4nKvNkMdKC7jSF3Aas0Ai12wev0')
        .send({
          principal: 1000,
          tasa_anual: 0.05,
          periodos: 3
        })
      expect(res.statusCode).toBe(200)
    }

    // 7th request should be blocked
    const res = await request(app)
      .post('/api/v1/interests/calcular-intereses')
      .set('X-API-KEY', '42IuTguij6KMv7KTV8MppveAkF6HGAC024d7Z4nKvNkMdKC7jSF3Aas0Ai12wev0')
      .send({
        principal: 1000,
        tasa_anual: 0.05,
        periodos: 3
      })
      expect(res.statusCode).toBe(429)
      expect(res.body).toEqual({
      error: 'Request limit reached'
    })
  })
})
