const express = require("express")
const router = express.Router()
const blog = require('../models/Blog')

router.get('/', async(req , res) => {
    try{

        const blogs = await blog.find()
        res.json(blogs)

    }catch(err){
    res.send('error' +err)
    }
})

router.post('/', async(req, res) => {
    const blo = new blog({
        title: req.body.title,
        blogDescription: req.body.blogDescription,
        blogPicture: req.body.blogPicture
    })
    try{
        const blog1 = await blo.save()
        res.json(blog1)
    }catch{
        res.send('Error')
    }
})


 module.exports = router