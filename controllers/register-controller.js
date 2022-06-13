const db = require('../db')
const {uid} = require('uid')
const md5 = require('md5')
module.exports.homeGet = (req,res,next) => {
    res.render('register')
}

module.exports.homePost = (req,res,next) => {
    if(req.body.password !== req.body.confirm) {
        res.render('register',{
            error: 'password does not match'
        })
        return
    }
    const data = {
        id: uid(),
        name: req.body.name,
        password: md5(req.body.password)
    }

    db.get('users').push(data).write()
    res.redirect('/login')
}