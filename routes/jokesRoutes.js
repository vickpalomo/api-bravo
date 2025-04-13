const { getJoke, getCategories, search } = require('../controllers/jokesController')
const express = require('express')

const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Jokes
 *   description: Chuck Norris Jokes methods
 */

/**
 * @swagger
*components:
*  schemas:
*    Joke:
*      type: object
*      properties:
*        id:
*          type: string
*          example: "qNEAgvO6Rv6Ra8R1tzD0jg"
*        value:
*          type: string
*          example: "Why do so many rock stars die at age 27? Chuck Norris"
*        icon_url:
*          type: string
*          format: uri
*          example: "https://api.chucknorris.io/img/avatar/chuck-norris.png"
*        url:
*          type: string
*          format: uri
*          example: "https://api.chucknorris.io/jokes/qNEAgvO6Rv6Ra8R1tzD0jg"
*        created_at:
*          type: string
*          format: date-time
*          example: "2020-01-05 13:42:26.766831"
*        updated_at:
*          type: string
*          format: date-time
*          example: "2020-01-05 13:42:26.766831"
*    JokesResponse:
*      type: object
*      properties:
*        total:
*          type: integer
*          example: 13
*        result:
*          type: array
*          items:
*            $ref: '#/components/schemas/Joke'
*/

/**
 * @swagger
 * /api/v1/jokes/random:
 *    get:
 *      summary: Chuck Norris Jokes
 *      tags: [Jokes]
 *      parameters:
 *        - name: category
 *          in: query
 *          description: category
 *          required: false
 *      security:
 *        - apiKey: []
 *      responses:
 *        '200':
 *          description: Get random jokes
 *          content:
*             application/json:
*               example:
*               # Properties of the referenced object
*                 categories: []
*                 created_at: "2020-01-05 13:42:26.766831"
*                 "icon_url": "https://api.chucknorris.io/img/avatar/chuck-norris.png"
*                 "id": "qNEAgvO6Rv6Ra8R1tzD0jg"
*                 "updated_at": "2020-01-05 13:42:26.766831"
*                 "url": "https://api.chucknorris.io/jokes/qNEAgvO6Rv6Ra8R1tzD0jg"
*                 "value": "Why do so many rock stars die at age 27? Chuck Norris"
 *        '404':
 *          description: Not Found joke
 *          content:
*             application/json:
*               example:
*               # Properties of the referenced object
*                 "timestamp": "2025-04-11T23:28:42.049Z"
*                 "status": 404
*                 "error": "Not Found"
*                 "path": "/jokes/random"
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
router.get('/random', getJoke)

/**
 * @swagger
 * /api/v1/jokes/categories:
 *    get:
 *      summary: Chuck Norris Jokes
 *      tags: [Jokes]
 *      security:
 *        - apiKey: []
 *      responses:
 *        '200':
 *          description: Get categories jokes
 *          content:
*             application/json:
*               example:
*               # Properties of the referenced object
*                 ["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"]
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
router.get('/categories', getCategories)

/**
 * @swagger
 * /api/v1/jokes/search:
 *    get:
 *      summary: Chuck Norris Jokes
 *      tags: [Jokes]
 *      parameters:
 *        - name: query
 *          in: query
 *          description: query
 *          required: true
 *      security:
 *        - apiKey: []
 *      responses:
 *        '200':
 *          description: Get random jokes
 *          content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/JokesResponse'
*               example:
*                     total: 13
*                     result:
*                       - categories: []
*                         created_at: "2020-01-05 13:42:20.262289"
*                         icon_url: "https://api.chucknorris.io/img/avatar/chuck-norris.png"
*                         id: "zunP4OI9S6-x58Kdmyu-iQ"
*                         updated_at: "2020-01-05 13:42:20.262289"
*                         url: "https://api.chucknorris.io/jokes/zunP4OI9S6-x58Kdmyu-iQ"
*                         value: "Chuck Norris created the Sasquatch by setting fire to a Yeti with a flame thrower."
 *        '400':
 *          description: Bad request
 *          content:
*             application/json:
*               example:
*               # Properties of the referenced object
*                 timestamp: "2025-04-11T23:28:42.049Z"
*                 status: 400
*                 error: "Bad Request"
*                 message: "search.query: size must be between 3 and 120"
*                 violations:
*                   search.query: "size must be between 3 and 120"
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
router.get('/search', search)

module.exports = router
