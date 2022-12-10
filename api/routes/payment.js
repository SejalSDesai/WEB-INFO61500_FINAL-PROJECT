const express = require('express')
const router = express.Router()

const { 
  processPayment,
  sendStripeApi
} = require('../controllers/paymentController')

const { isAuthUser } = require('../middleware/auth')

router.route('/payment/process').post(isAuthUser, processPayment);
//api key route doesnt need authorization
router.route('/stripeapi').get(sendStripeApi);

module.exports = router;