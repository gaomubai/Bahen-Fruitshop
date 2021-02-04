/* eslint-disable strict */

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    username: {
      type: String,
      required: true },
    password: {
      type: String,
      requrired: true },
    createAt: {
      type: Date,
      default: Date.now },
    shoppingcart: {
      type: [{ itemname: String, quantity: Number }],
      default: [] },
  });

  return mongoose.model('User', UserSchema, 'user');
};
