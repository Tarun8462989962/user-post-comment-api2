const { Schema, model } = require("mongoose");
const postModel = require("./post.model");
const userModel = require("./user.model");

const commentSchema = new Schema(
  {
    isDeleted: { type: String, default: "false" },
    commentBy: {
      type: Schema.Types.ObjectId,
      ref: "userModel",
    },
    commentOn: {
      type: Schema.Types.ObjectId,
      ref: "postModel",
    },
    comment: {
      type: String,
      lowercase: true,
      minlength: 3,
      maxlength: 100,
    },
  },
  { versionKey: false }
);

module.exports = commentModel = model("commentModel", commentSchema);
