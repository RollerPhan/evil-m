const db = require('../db')
const {uid} = require('uid')

module.exports.homeGet = (req,res,next) => {
    res.render('create')
}


module.exports.homePost = (req,res,next) => {
    req.body.avatar = req.file.path.split('/').slice(1).join('/')
    const data = {
        id: uid(),
        name: req.body.name,
        price: req.body.price,
        avatar: req.body.avatar
    }

    db.get('product').push(data).write()
    res.redirect('/')
}