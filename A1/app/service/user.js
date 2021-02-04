'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async createUser(payLoad) {
    // connect with database
    return this.ctx.model.User.create(payLoad).then(res => {
      return { success: true, msg: res, code: 0 };
    }).catch(err => {
      return { success: false, err };
    });
  }

  async getUser() {
    return this.ctx.model.User.find({});
  }

  async getUserByUsername(name) {
    return this.ctx.model.User.findOne({ username: name });
  }

  async updataUser(_id, payLoad) {
    return this.ctx.model.User.findByIdAndUpdate(_id, payLoad);
  }

  async deleteUser(_id) {
    return this.ctx.model.User.findByIdAndDelete(_id);
  }

  async updataShoppingcart(username, payLoad) {
    const user = await this.service.user.getUserByUsername(username);
    for (let i = 0; i < user.shoppingcart.length; i++) {
      if (user.shoppingcart[i].itemname === payLoad.itemname) {
        const id = user.shoppingcart[i]._id;
        return this.ctx.model.User.update({ 'shoppingcart._id': id }, { $set: { 'shoppingcart.$.quantity': payLoad.quantity } });
      }
    }
    return this.ctx.model.User.findByIdAndUpdate(user._id, { $push: { shoppingcart: { itemname: payLoad.itemname, quantity: payLoad.quantity } } });
  }
}

module.exports = UserService;
