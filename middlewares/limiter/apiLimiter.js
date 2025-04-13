const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 6,
  keyGenerator: (req) => {
    const key = req.headers['x-api-key']
    return key || req.ip
  },
  handler: (req, res) => {
    res.status(429).json({ error: 'Request limit reached' })
  }
})

module.exports = {
  limiter
}
