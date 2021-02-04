'use strict';

const Controller = require('egg').Controller;

class ItemController extends Controller {
  async createItem() {
    // create new item
    const { ctx, service } = this;
    const payLoad = ctx.request.body;
    const res = await service.item.createItem(payLoad);
    ctx.helper.success({ data: res, msg: 'Create successfully' });
  }

  async postComments() {
    const { ctx, service } = this;
    const itemname = ctx.params.itemname;
    const username = ctx.params.username;
    const payLoad = ctx.request.body;
    const res = await service.item.postComments(itemname, username, payLoad);
    ctx.helper.success({ data: res, msg: 'Post successfully' });
  }
}

module.exports = ItemController;
