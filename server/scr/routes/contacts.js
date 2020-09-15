const express = require("express")
const router = express.Router()
const contact = require('../models/Contact')

router.get('/', async(req , res) => {
    try{

        const contacts = await contact.find()
        res.json(contacts)

    }catch(err){
    res.send('error' +err)
    }
})

router.post('/', async(req, res) => {
    const cont = new contact({
        title: req.body.title,
        message: req.body.message
    })
    try{
        const contact1 = await cont.save()
        res.json(contact1)
    }catch{
        res.send('Error')
    }
})


 module.exports = router