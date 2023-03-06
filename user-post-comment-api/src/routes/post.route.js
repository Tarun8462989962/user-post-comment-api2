const { Router } = require('express');
const postController = require('../controllers/post-controller');
const postRouter = Router({ mergeParams: true });

postRouter.post('/post',postController.createPost)
postRouter.get('/',postController.getAllPosts)
postRouter.get('/:_id',postController.getPostByID)
postRouter.put('/:_id',postController.updatePostByID)

module.exports = postRouter;