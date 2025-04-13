const { app } = require('../app')
const request = require('supertest')

describe('Jokes Controller', () => {
  it('should get random joke', async () => {
    const response = await request(app)
      .get('/api/v1/jokes/random')
      .set('X-API-KEY', '42IuTguij6KMv7KTV8MppveAkF6HGAC024d7Z4nKvNkMdKC7jSF3Aas0Ai12wev0')

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('categories')
    expect(response.body).toHaveProperty('created_at')
    expect(response.body).toHaveProperty('icon_url')
    expect(response.body).toHaveProperty('id')
    expect(response.body).toHaveProperty('updated_at')
    expect(response.body).toHaveProperty('url')
    expect(response.body).toHaveProperty('value')
  })

  it('should response status error 404 joke not found', async () => {
    const response = await request(app)
      .get('/api/v1/jokes/random')
      .query({ category: 'asdf' })
      .set('X-API-KEY', '42IuTguij6KMv7KTV8MppveAkF6HGAC024d7Z4nKvNkMdKC7jSF3Aas0Ai12wev0')

    expect(response.status).toBe(404)
    expect(response.body).toHaveProperty('timestamp')
    expect(response.body).toHaveProperty('status')
    expect(response.body).toHaveProperty('error')
    expect(response.body).toHaveProperty('path')
  })

  it('should get categories from chuck norris jokes', async () => {
    const response = await request(app)
      .get('/api/v1/jokes/categories')
      .set('X-API-KEY', '42IuTguij6KMv7KTV8MppveAkF6HGAC024d7Z4nKvNkMdKC7jSF3Aas0Ai12wev0')

    expect(response.status).toBe(200)
    expect(response.body).toEqual(['animal', 'career', 'celebrity', 'dev', 'explicit', 'fashion', 'food', 'history', 'money', 'movie', 'music', 'political', 'religion','science', 'sport', 'travel'])
  })

  it('should search jokes with parameter', async () => {
    const response = await request(app)
      .get('/api/v1/jokes/search')
      .set('X-API-KEY', '42IuTguij6KMv7KTV8MppveAkF6HGAC024d7Z4nKvNkMdKC7jSF3Aas0Ai12wev0')
      .query({ query: 'dev' })

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('total')
    expect(response.body).toHaveProperty('result')
  })

  it('should response 400 to search jokes with parameter', async () => {
    const response = await request(app)
      .get('/api/v1/jokes/search')
      .set('X-API-KEY', '42IuTguij6KMv7KTV8MppveAkF6HGAC024d7Z4nKvNkMdKC7jSF3Aas0Ai12wev0')
      .query({ query: 'de' })

    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('timestamp')
    expect(response.body).toHaveProperty('status')
    expect(response.body).toHaveProperty('error')
    expect(response.body).toHaveProperty('message')
    expect(response.body).toHaveProperty('violations')
  })
})
