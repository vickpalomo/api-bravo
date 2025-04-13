const { getKey } = require('../../models/key')

const validateApiKey = async (req, res, next) => {
  try {
    const key = req.headers['x-api-key']
    if (!key) {
      return res.status(401).send({ error: 'API key is missing' })
    }

    const data = await getKey(key)

    if (!data) {
      return res.status(401).send({
        error: 'Authentication failed'
      })
    }
    next()
  } catch (error) {
    console.log('apiKeyValidation.validateApiKey.error', error)
    return res.status(401).send({
      error: 'Authenticaton failed'
    })
  }
}

module.exports = {
  validateApiKey
}
