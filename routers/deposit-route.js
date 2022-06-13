const express = require('express');
const router = express.Router();
const depositController = require('../controllers/deposit-controller')

router.get('/',depositController.homeGet)


module.exports = router