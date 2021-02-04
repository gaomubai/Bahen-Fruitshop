/* eslint-disable strict */

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ItemSchema = new Schema({
    itemname: {
      type: String,
      required: true },
    price: {
      type: Number,
      require: true },
    quantity: {
      type: Number,
      default: 0 },
    comments: {
      type: [ Schema.Types.ObjectId.comment ],
      default: [] },
  });

  return mongoose.model('Item', ItemSchema, 'item');
};
