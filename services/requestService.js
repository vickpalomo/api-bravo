require('dotenv').config()
const fetch = require('node-fetch')

const buildQueryString = (params) => {
  if (!params) return ''
  const query = new URLSearchParams(params).toString()
  return query ? `?${query}` : ''
}

const requestExternalApi = async (url, options = {}, queryParams = null) => {
  try {
    const queryString = buildQueryString(queryParams)
    const fullUrl = `${url}${queryString}`

    const response = await fetch(fullUrl, options)
    const status = response.status

    const data = await response.json()
    return { status, data }
  } catch (error) {
    console.log('requestService.requestExternalApi', error)
    return { status: 500, data: {} }
  }
}

module.exports = {
  requestExternalApi
}
