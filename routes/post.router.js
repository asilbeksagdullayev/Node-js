const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');

router.get('/get', postController.getAll);
router.post('/create', postController.create);
router.delete('/delate/:id', postController.delate);
router.put('/edit/:id', postController.edit);
router.get('/get-one/:id',postController.getOne)

module.exports = router;
