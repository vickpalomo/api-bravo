/* eslint-disable camelcase */
const calculateCompoundInterest = (body) => {
  try {
    const { principal, tasa_anual, periodos } = body
    return principal * Math.pow((1 + tasa_anual), periodos)
  } catch (error) {
    console.log('InterestsService.calculateCompoundInterest.error: ', error)
    throw new Error('There was an error calculating compound interest')
  }
}

module.exports = {
  calculateCompoundInterest
}
