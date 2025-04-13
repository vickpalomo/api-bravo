const { getJokeRandom, getJokeCategories, searchJoke } = require('../services/jokesService')

const getJoke = async (req, res) => {
  try {
    const data = await getJokeRandom(req)
    return res.status(data.status).send(data.data)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

const getCategories = async (req, res) => {
  try {
    const data = await getJokeCategories(req)
    return res.status(data.status).send(data.data)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

const search = async (req, res) => {
  try {
    const { query } = req.query
    if (!query) res.status(400).send({ error: 'query is required' })
    const data = await searchJoke(req)
    return res.status(data.status).send(data.data)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

module.exports = {
  getJoke,
  getCategories,
  search
}
