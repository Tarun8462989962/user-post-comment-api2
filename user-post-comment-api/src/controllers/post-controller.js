const mongoose = require('mongoose');
const postModel = require('../models/post.model');
const userModel = require('../models/user.model');

const toDo = mongoose.Types.ObjectId;


exports.createPost = async (req, res, next) => {
    try {
        let { userid } = req.params;
        userid = toDo(userid)
        console.log(userid)
        const { postData } = req.body;
        const post = await postModel.create({postedBy: userid,postData: postData})
        const user = await userModel.findByIdAndUpdate(userid, { $push: { 'posts': post._id } })
        return res.json(post)
    } catch (error) {
        next(error)
    }
}


exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await postModel.find().populate('userid')
        return res.json(posts);
    } catch (error) {
        next(error)
    }
}

exports.getPostByID = async (req, res, next) => {
    try {
        const { _id } = req.params;
        const post = await postModel.findById(_id).populate('userid');
        res.json(post);
    } catch (error) {
        next(error)
    }
}


exports.updatePostByID = async (req, res, next) => {
    try {
        const { _id } = req.params;
        const update_Post = await postModel.findByIdAndUpdate(_id, { $set: req.body }, { new: true });
        res.json(update_Post);
    } catch (error) {
        next(error)
    }
}