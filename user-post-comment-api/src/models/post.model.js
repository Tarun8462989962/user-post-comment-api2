const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    isDeleted: { type: String, default: "false" },
    postData: {
      type: String,
      uppercase: true,
      required: true,
    },
    postedBy: {
      type: Schema.Types.ObjectId,
      ref: "userModel",
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "commentModel",
      },
    ],
  },
  { versionKey: false }
);

module.exports = postModel = model("postModel", postSchema);
