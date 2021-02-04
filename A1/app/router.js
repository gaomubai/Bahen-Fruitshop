'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // User
  // create new user
  router.post('/api/user', app.jwt, controller.user.createUser);
  // get all user
  router.get('/api/user', app.jwt, controller.user.getUser);
  // updata user
  router.put('/api/user/:id', controller.user.updataUser);
  // delete user
  router.delete('/api/user/:id', controller.user.deleteUser);
  // user login
  router.post('/api/user/login', controller.user.login);
  // user register
  router.post('/api/user/register', controller.user.register);
  // add item to cart
  router.post('/api/user/shoppingcart/:username', controller.user.updataShoppingcart);
  // check out
  router.post('/api/user/checkout/:username', controller.user.checkout);

  // Item
  // creat item
  router.post('/api/item', controller.item.createItem);
  // post comments
  router.post('/api/item/postComments/:itemname&:username', controller.item.postComments);
};
