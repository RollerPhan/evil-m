const express = require('express');
const router = express.Router();
const registerController = require('../controllers/register-controller')


router.get('/', registerController.homeGet)
router.post('/', registerController.homePost)

module.exports = router