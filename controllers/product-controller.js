const db = require('../db')
const {uid} = require('uid')
const md5 = require('md5')
module.exports.homeGet = (req,res,next) => {
    const users = db.get('product').find({id: req.params.id}).value()
    res.render('product', {
        user: users
    })
}

module.exports.homePost = (req,res,next) => {
}