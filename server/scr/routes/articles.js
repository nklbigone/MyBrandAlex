const express = require("express")
const router = express.Router()
const article = require('../models/Article')

router.get('/', async(req , res) => {
    try{

        const articles = await article.find()
        res.json(articles)

    }catch(err){
    res.send('error' +err)
    }
})

router.post('/', async(req, res) => {
    const art = new article({
        title: req.body.title,
        description: req.body.description,
        picture: req.body.picture
    })
    try{
        const article1 = await art.save()
        res.json(article1)
    }catch{
        res.send('Error')
    }
})


 module.exports = router