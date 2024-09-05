require('dotenv').config();
const http = require('http');
const mongoose = require('mongoose');
const postModel = require('./model/post.model');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 5500;

const server = http.createServer(app);

app.use(express.json());

app.get('/', async (req, res) => {
	try {
		const allPost = await postModel.find();
		res.status(200).json(allPost);
	} catch (error) {}
});

app.post('/', async (req, res) => {
	try {
		const { title, body } = req.body;
		const newPost = await postModel.create({ title, body });
		res.status(201).json(newPost);
	} catch (error) {
		res.status(500).json({ message: 'Error creating post', error: error.message });
	}
});

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
