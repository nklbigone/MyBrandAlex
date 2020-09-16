const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({

    title: {
        type: String
    },
    blogDescription: {
        type: String
    },
    blogPicture: {
        type: String
    }
})

module.exports = mongoose.model('blog', blogSchema)