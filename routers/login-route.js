const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login-controller')


router.get('/', loginController.homeGet)
router.post('/', loginController.homePost)


module.exports = router