const db = require('../db')
const {uid} = require('uid')
const md5 = require('md5')
module.exports.homeGet = (req,res,next) => {
    res.render('login')
}

module.exports.homePost = (req,res,next) => {
    const username = req.body.name
    const password = req.body.password
    const users = db.get('users').find({name: username}).value()
    if (md5(password) !== users.password) {
        res.render('login')
        return
    }
    res.cookie('userId', uid(30))
    res.redirect('/')
}