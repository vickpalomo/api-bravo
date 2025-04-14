const { requestExternalApi } = require('./requestService')

const getWeather = async (req) => {
  const url = `${process.env.OPENWEATHER_URL}`
  const city = req.params.city

  const options = {
    origin: req.headers.origin || req.headers.host || 'unknow_origin'
  }

  const query = {
    appid: process.env.OPENWEATHER_API_KEY,
    q: city
  }
  const data = await requestExternalApi(url, options, query)
  return data
}

module.exports = {
  getWeather
}
