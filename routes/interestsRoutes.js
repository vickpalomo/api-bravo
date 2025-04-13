const { interestsValidation } = require('../middlewares/interests/interestsValidation')
const { compoundInterest } = require('../controllers/interestsController')
const express = require('express')

const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Interests
 *   description: Interests methods
 */

/**
 * @swagger
 * /api/v1/interests/calcular-intereses:
 *    post:
 *      summary: Calculate compound interests
 *      tags: [Interests]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
*               required:
*                 - principal
*                 - tasa_anual
*                 - periodos
*               properties:
*                 principal:
*                   type: number
*                   format: float
*                   minimum: 0
*                   exclusiveMinimum: true
*                 tasa_anual:
*                   type: number
*                   format: float
*                   minimum: 0
*                   maximum: 1
*                   exclusiveMinimum: true
*                 periodos:
*                   type: integer
*                   minimum: 0
*                   exclusiveMinimum: true
*               type: object
*               example: # Sample object
*                 principal: 1000
*                 tasa_anual: 0.05
*                 periodos: 3
 *      security:
 *        - apiKey: []
 *      responses:
 *        '200':
 *          description: Interests calculated
 *          content:
*             application/json:
*               example:
*               # Properties of the referenced object
*                 monto_total: 1157.63
*                 detalles_solicitud:
*                   principal: 1000
*                   tasa_anual: 0.05
*                   periodos: 3
 *        '400':
 *          description: missing arguments | bad format data
 *          content:
*             application/json:
*               example:
*               # Properties of the referenced object
*                 data: {}
*                 msg: Field tasa_anual must be greater than 0.01
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
*                 msg: There was an error calculating compound interest
 */

router.post('/calcular-intereses', interestsValidation, compoundInterest)

module.exports = router
