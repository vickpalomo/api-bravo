const { requestExternalApi } = require('./requestService')

const getJokeRandom = async (req) => {
  let queryParams = null
  const url = `${process.env.JOKES_URL}/random`
  const { category } = req.query
  if (category) {
    queryParams = {
      category
    }
  }
  const options = {
    origin: req.headers.origin || req.headers.host || 'unknow_origin'
  }
  const data = requestExternalApi(url, options, queryParams)
  return data
}

const getJokeCategories = async (req) => {
  const url = `${process.env.JOKES_URL}/categories`
  const options = {
    origin: req.headers.origin || req.headers.host || 'unknow_origin'
  }
  const data = requestExternalApi(url, options)
  return data
}

const searchJoke = async (req) => {
  let queryParams = null
  const url = `${process.env.JOKES_URL}/search`
  const { query } = req.query
  if (query) {
    queryParams = {
      query
    }
  }
  const options = {
    origin: req.headers.origin || req.headers.host || 'unknow_origin'
  }
  const data = requestExternalApi(url, options, queryParams)
  return data
}

module.exports = {
  getJokeRandom,
  getJokeCategories,
  searchJoke
}
