const express = require('express')
const router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: './public/upload' })
const createController = require('../controllers/create-controller')

router.get('/',createController.homeGet)

router.post('/',
    upload.single('avatar'),
    createController.homePost)

module.exports = router