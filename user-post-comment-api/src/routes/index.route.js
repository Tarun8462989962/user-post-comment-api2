const { Router } = require('express');
const userRouter = require('./user.route');
const postRouter = require('./post.route');
const commentRouter = require('./comment.route');
const indexRouter = Router( { mergeParams: true });

indexRouter.use("/",userRouter);
indexRouter.use('/user/:userid',postRouter);
// indexRouter.use('/user/:userid/post/:postid',commentRouter);


module.exports = indexRouter;


