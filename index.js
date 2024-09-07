require('dotenv').config();
const http = require('http');
const mongoose = require('mongoose');
const postModel = require('./model/post.model');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 5500;

const server = http.createServer(app);

//router
const postRoute = require('./routes/post.router');
app.use(express.json());

app.use('/api/post/', postRoute);

const StartApp = async () => {
	try {
		await mongoose.connect(process.env.DB_URL).then(() => console.log('Success connecting in DB'));
		server.listen(PORT, () => {
			console.log('Start your project at http://localhost:5500');
		});
	} catch (error) {
		console.log(`Error connecting to DB ${error}`);
	}
};

StartApp();
