import express from "express"
import mongoose from "mongoose"
import contactRoute from './scr/routes/contacts'
import blogRoute from './scr/routes/blogs'
import articleRoute from './scr/routes/articles'
const url = 'mongodb://localhost:27017/blog'
const app = express()

mongoose.connect(url, { useNewUrlParser: true })
	const con = mongoose.connection
	
	con.on('open', () => {

		console.log('Connected...')
	})
	app.use(express.json())
	app.use('/contacts', contactRoute)
	app.use('/blogs', blogRoute)
	app.use('/articles', articleRoute)
	app.listen(6000, () => {
		console.log('Server started')
	})

