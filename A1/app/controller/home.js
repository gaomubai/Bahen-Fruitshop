'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, service } = this;
    const res = await service.home.echo();
    ctx.body = res;
  }
}

module.exports = HomeController;
