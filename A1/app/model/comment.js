/* eslint-disable strict */

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const CommentSchema = new Schema({
    username: {
      type: String,
      required: true,
    },

    context: {
      type: String,
    },

    time: {
      type: Date,
      default: Date.now,
    },
  });
  return mongoose.model('Comment', CommentSchema, 'comment');
};
