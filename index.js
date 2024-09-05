require('dotenv').config();
const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const postModel = require('./model/post.model');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
	try {
		const allPosts = await postModel.find();
		res.status(200).json(allPosts);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving posts', error: error.message });
	}
});
const asilbek = {};

app.post('/', async (req, res) => {
	try {
		const { title, body } = req.body;
		const newPost = await postModel.create({ title, body });
		res.status(201).json(newPost);
	} catch (error) {
		res.status(500).json({ message: 'Error creating post', error: error.message });
	}
});

const server = http.createServer(app);
const PORT = process.env.PORT || 8080;

const StartApp = async () => {
	try {
		await mongoose
			.connect(process.env.DB_URL)
			.then(() => console.log('Successfully connected to MongoDB'));
		server.listen(PORT, () => {
			console.log(`Server is running on http://localhost:${PORT}`);
		});
	} catch (error) {
		console.log(`Error connecting to DB: ${error}`);
	}
};

StartApp();
