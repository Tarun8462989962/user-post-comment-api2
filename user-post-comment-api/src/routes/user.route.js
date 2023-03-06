const { Router } = require('express');
const userController = require('../controllers/user-controller')
const userRouter = Router( { mergeParams: true });


userRouter.post('/user', userController.createUser)
userRouter.get('/users', userController.getAllUsers)
userRouter.get('/user/:_id', userController.getUserByID)
userRouter.put('/user/:_id', userController.updateUserByID)
// userRouter.delete('/:_id', userController.deleteUserByID)

module.exports = userRouter;