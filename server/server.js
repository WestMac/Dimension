const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' })


const app = express();
const port = process.env.PORT || 3000;

const db = mysql.createConnection({
	host: process.env.DATABASE_HOST,
	user: process.env.DATABASE_USER,
	password:process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE
})

db.connect( (err) => {
	if(err) {
		console.log(err)
	} else {
		console.log("my sql connected....")
	}
})

app.get('/', (req,res) => {
	res.send('<h1>hello</h1')
});



app.listen(port, () =>{
	console.log(`listening on port:${port}`)
});