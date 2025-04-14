const express = require('express')
const { getWeatherByCityOrZip } = require('../controllers/weatherController')

const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Weather
 *   description: Weather service
 */
/**
 * @swagger
 * /api/v1/weather/{city}:
 *    get:
 *      summary: Weather Service
 *      tags: [Weather]
 *      parameters:
 *        - name: city
 *          in: path
 *          description: Parameter to search for climatological data can be the city name or the postal code. Merida, 97000
 *          required: true
 *      security:
 *        - apiKey: []
 *      responses:
 *        '200':
 *          description: Get weather by name or city
 *          content:
*             application/json:
*               example:
*               # Properties of the referenced object
*                 coord:
*                   lon: 54.0281
*                   lat: 3.6409
*                 weather:
*                   - id: 803
*                     main: Clouds
*                     description: broken clouds
*                     icon: 04n
*                 base: stations
*                 main:
*                   temp: 296.55
*                   feels_like: 297.45
*                   temp_min: 296.55
*                   temp_max: 296.55
*                   pressure: 1012
*                   humidity: 96
*                   sea_level: 1012
*                   grnd_level: 991
*                 visibility: 10000
*                 wind:
*                   speed: 1.16
*                   deg: 44
*                   gust: 1.17
*                 clouds:
*                   all: 52
*                   dt: 1744584891
*                 sys:
*                   country: SR
*                   sunrise: 1744536638
*                   sunset: 1744580525
*                 timezone: 10800
*                 id: 3380993
*                 name: Maripasoula
*                 cod: 200
 *        '404':
 *          description: city not found
 *          content:
*             application/json:
*               example:
*               # Properties of the referenced object
*                 "cod": 404
*                 "message": city not found
 *        '401':
 *          description: Authentication failed
 *          content:
*             application/json:
*               example:
*               # Properties of the referenced object
*                 error: Authentication failed
 *        '429':
 *          description: Rate limit
 *          content:
*             application/json:
*               example:
*               # Properties of the referenced object
*                 error: Request limit reached
 *        '500':
 *          description: Internal Server Error
 *          content:
*             application/json:
*               example:
*               # Properties of the referenced object
*                 data: {}
 */

router.get('/:city', getWeatherByCityOrZip)

module.exports = router
