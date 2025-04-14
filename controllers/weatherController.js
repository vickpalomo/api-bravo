const { getWeather } = require('../services/weatherService')

const getWeatherByCityOrZip = async (req, res) => {
  try {
    const { city } = req.params
    if (!city) res.status(400).send({ error: 'city is required' })
    const { data, status } = await getWeather(req)
    return res.status(status).send(data)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

module.exports = {
  getWeatherByCityOrZip
}
