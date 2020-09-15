const express = require("express")
const mongoose = require("mongoose")
const url = 'mongodb://localhost:27017/blog'
const app = express()

mongoose.connect(url, { useNewUrlParser: true })
	const con = mongoose.connection
	
	con.on('open', () => {

		console.log('Connected...')
	})
	app.use(express.json())
	const contactRoute = require('./scr/routes/contacts')
		app.use('/contacts', contactRoute)
		app.listen(5000, () => {
		console.log('Server started')
	})

