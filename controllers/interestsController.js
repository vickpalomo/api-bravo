const { calculateCompoundInterest } = require('../services/interestsService')
const { roundNumber } = require('../utils/numberUtils')

const compoundInterest = async (req, res) => {
  try {
    const totalAmount = calculateCompoundInterest(req.body)
    const data = {
      monto_total: roundNumber(totalAmount),
      detalles_solicitud: req.body
    }
    return res.status(200).send(data)
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

module.exports = {
  compoundInterest
}
