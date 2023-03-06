const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    AuthorName: {
      type: String,
      uppercase: true,
      required: true,
      minlength: 3,
      maxlength: 30,
    },
    city: { type: String, default: "Bhopal" },
    isDeleted: { type: String, default: "false" },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "postModel",
      },
    ],
  },
  { versionKey: false }
);

module.exports = userModel = model("userModel", userSchema);
