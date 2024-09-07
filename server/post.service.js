const postModel = require('../model/post.model');

class postService {
	async getAll() {
		const allPost = await postModel.find();
		return allPost;
	}
	async create(post) {
		const newPost = await postModel.create(post);
		return newPost;
	}
	async delate(id) {
		const post = postModel.findByIdAndDelete(id);
		return post;
	}

	async edit(id, post) {
		if (!id) {
			throw new Error('Id not found !');
		}
		const updateData = postModel.findByIdAndUpdate(post, id, {
			new: true,
		});
		return updateData;
	}
	async getOne(id) {
		const post = postModel.findById(id);
		return post;
	}
}

module.exports = new postService();
