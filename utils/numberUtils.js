const roundNumber = (num, decimales = 2) => {
  const opciones = {
    maximumFractionDigits: decimales,
    useGrouping: false
  }
  return parseFloat(new Intl.NumberFormat(false, opciones).format(num))
}

module.exports = {
  roundNumber
}
