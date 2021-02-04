'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  constructor(app) {
    super(app);
    this.UserCreateRule = {
      username: {
        type: 'string',
        required: true,
        allowEmpty: false,
        format: /[A-Za-z_@.]{3,10}/,
      },
      password: {
        type: 'password',
        require: true,
        allowEmpty: false,
        min: 6,
      },
    };
  }

  async createUser() {
    // create new user
    this.ctx.validate(this.UserCreateRule);
    const payLoad = this.ctx.request.body;
    const res = await this.service.user.createUser(payLoad);
    this.ctx.helper.success({ data: res, msg: 'Create successfully' });
  }

  async getUser() {
    // get all user
    const { ctx, service } = this;
    const res = await service.user.getUser();
    ctx.helper.success({ data: res });
  }

  async updataUser() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    const payLoad = ctx.request.body;
    await service.user.updataUser(id, payLoad);
    ctx.helper.success({ msg: 'Updata successfully' });
  }

  async deleteUser() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    await service.user.deleteUser(id);
    ctx.helper.success({ msg: 'Delete successfully' });
  }

  async login() {
    const params = this.ctx.request.body;
    if (!params.username || !params.password) {
      this.ctx.body = {
        code: 500,
        msg: 'Username and Password do not match.' };
      return;
    }
    const user = await this.service.user.getUserByUsername(params.username);
    if (!user) {
      this.ctx.body = {
        code: 500,
        msg: 'Username and Password do not match.' };
      return;
    }
    const checkPassword = params.password === user.password;
    if (checkPassword) {
      const token = this.app.jwt.sign({
        username: user.username,
      }, this.app.config.jwt.secret, { expiresIn: '2h' });
      this.ctx.body = {
        code: 200,
        data: token,
      };
    } else {
      this.ctx.body = {
        code: 500,
        msg: 'Username and Password do not match.',
      };
    }
  }

  async register() {
    const params = this.ctx.request.body;
    const user = await this.service.user.getUserByUsername(params.username);
    if (user) {
      this.ctx.body = {
        code: 500,
        msg: 'The usename has been used' };
      return;
    }
    this.ctx.validate(this.UserCreateRule);
    const result = await this.service.user.createUser(params);
    if (result) {
      this.ctx.body = {
        code: 200,
        msg: 'register finished',
        Username: result.msg.username,
        Password: result.msg.password,
      };
    }
  }

  async updataShoppingcart() {
    const payLoad = this.ctx.request.body;
    const username = this.ctx.params.username;
    const user = await this.service.user.getUserByUsername(username);
    if (!user) {
      this.ctx.body = {
        code: 500,
        msg: 'No such user' };
      return;
    }
    const item = await this.service.item.getItemByItemname(payLoad.itemname);
    if (!item) {
      this.ctx.body = {
        code: 500,
        msg: 'No such itsem' };
      return;
    }
    const result = await this.service.user.updataShoppingcart(username, payLoad);
    if (result) {
      this.ctx.body = {
        code: 200,
        data: result,
        msg: 'Add successfully',
      };
    }
  }

  async checkout() {
    const username = this.ctx.params.username;
    const user = await this.service.user.getUserByUsername(username);
    if (!user) {
      this.ctx.body = {
        code: '500',
        msg: 'No such user' };
      return;
    }
    const itemsInCart = user.shoppingcart;
    let item;
    let res = 0;
    for (let i = 0; i < itemsInCart.length; i++) {
      item = await this.service.item.getItemByItemname(itemsInCart[i].itemname);
      res = res + (item.price * itemsInCart[i].quantity);
    }
    this.ctx.body = {
      code: '200',
      data: res,
    };
    return res;
  }
}

module.exports = UserController;
