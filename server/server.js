const express = require("express")
const mongoose = require("mongoose")
const app = express()




mongoose
	.connect("mongodb://localhost:27017/blog", { useNewUrlParser: true })
	.then(() => {
		const app = express()

		app.listen(5000, () => {
			console.log("Server has started!")
		})
	})
