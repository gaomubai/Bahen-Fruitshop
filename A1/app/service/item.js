'use strict';

const Service = require('egg').Service;

class ItemService extends Service {
  async createItem(payLoad) {
    return this.ctx.model.Item.create(payLoad).then(res => {
      return { success: true, msg: res, code: 0 };
    }).catch(err => {
      return { success: false, err };
    });
  }

  async getItemByItemname(name) {
    return this.ctx.model.Item.findOne({ itemname: name });
  }

  async postComments(_itemname, _username, payLoad) {
    const item = await this.ctx.model.Item.findOne({ itemname: _itemname });
    const user = await this.ctx.model.User.findOne({ username: _username });
    if (!item || !user) {
      this.ctx.body = {
        code: '500',
        msg: 'itemname or username error',
      };
    }
    const comment = await this.ctx.model.Comment.create([{ username: user.username, context: payLoad.context }]);
    return this.ctx.model.Item.update({ itemname: item.itemname }, { $push: { comments: comment } });
  }
}

module.exports = ItemService;
