const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({

    title: {
        type: String
    },
    message: {
        type: String
    }
})

module.exports = mongoose.model('contact', contactSchema)