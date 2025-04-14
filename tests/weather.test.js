const { app } = require('../app')
const request = require('supertest')

describe('Weather Test', () => {
  it('should get weather data for city name', async () => {
    const res = await request(app)
      .get('/api/v1/weather/merida')
      .set('X-API-KEY', '42IuTguij6KMv7KTV8MppveAkF6HGAC024d7Z4nKvNkMdKC7jSF3Aas0Ai12wev0')
    expect(res.statusCode).toBe(200)
  })

  it('should get weather data for city zipcode', async () => {
    const res = await request(app)
      .get('/api/v1/weather/97000')
      .set('X-API-KEY', '42IuTguij6KMv7KTV8MppveAkF6HGAC024d7Z4nKvNkMdKC7jSF3Aas0Ai12wev0')
    expect(res.statusCode).toBe(200)
  })

  it('should get weather data for city zipcode', async () => {
    const res = await request(app)
      .get('/api/v1/weather/970qwe')
      .set('X-API-KEY', '42IuTguij6KMv7KTV8MppveAkF6HGAC024d7Z4nKvNkMdKC7jSF3Aas0Ai12wev0')
    expect(res.statusCode).toBe(404)
  })
})
