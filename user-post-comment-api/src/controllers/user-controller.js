const postModel = require('../models/post.model');
const userModel = require('../models/user.model');

exports.createUser = async (req, res, next) => {
    try {
        const user = await userModel.create(req.body);
        return res.json(user);
    }
    catch (error) {
        next(error)
    }
}

exports.getAllUsers = async (req, res, next) => {
    try {
        const user = await userModel.find().populate('posts');
        return res.json(user);
    } catch (error) {
        
    }
}

exports.getUserByID = async (req,res,next) => {
    try {
        const { _id } = req.params;
        const user = await userModel.findById(_id).populate('posts');
        res.json(user);
    } catch (error) {
        next(error)
    }
}

exports.updateUserByID = async (req,res,next) => {
    try {
        const { _id } = req.params;
        const update_User = await userModel.findByIdAndUpdate(_id,{$set: req.body},{new : true});
        res.json(update_User);
    } catch (error) {
        next(error)
    }
}

// exports.deleteUserByID = async (req,res,next) => {
//     try {
//         const { _id } = req.params;
//         await userModel.findByIdAndDelete(_id).populate('posts');
//         // await postModel.findByIdAndDelete(_id);
//         res.json('User Deleted');       
//     } catch (error) {
//         next(error)
//     }
// }