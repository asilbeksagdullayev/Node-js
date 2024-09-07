const postModel = require('../model/post.model');
const postService = require('../server/post.service');

class PostController {
	async getAll(req, res) {
		try {
			const allPost = await postService.getAll();
			res.status(200).json(allPost);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	async create(req, res) {
		try {
			const newPost = await postService.create(req.body);
			res.status(201).json(newPost);
		} catch (error) {
			res.status(500).json({ message: 'Error creating post', error: error.message });
		}
	}
	async delate(req, res) {
		try {
			const post = await postService.delate(req.params.id);
			res.status(200).json(post);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	async edit(req, res) {
		try {
			const { body, params } = req;
			const editData = await postService.edit(body, params.id);
			res.status(200).json(editData);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	async getOne(req, res) {
		try {
			const post = await postService.getOne(req.params.id);
			res.status(200).json(post);
		} catch (error) {
			res.status(500).json(error);
		}
	}
}

module.exports = new PostController();
