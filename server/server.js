const express = require('express')
require('dotenv').config()
const app = express()
const cors =  require('cors')

app.use(cors({
	origin: "http://localhost:5173",
	credentials: true
}))

app.get('/add', (req,res) => {
	try {
		res.cookie("cook", "I am getting cooked", {
			maxAge: 7 * 24 * 60 * 60* 1000,
			secure: true,
			sameSite: 'lax',
			httpOnly: true
		})
		return res.send("Cookie added")
	} catch (error) {
		return res.send(error)
	}
})

app.listen(3000, () => {
	console.log("Running ...")
})