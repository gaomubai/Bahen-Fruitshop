'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/user.test.js', () => {
  it('it should register a new user', () => {
    return app.httpRequest().post('/api/user/register').send({ username: 'abcde', password: '123456' })
      .expect(200)
      .expect({
        code: 200,
        msg: 'register finished',
        Username: 'abcde',
        Password: '123456',
      });
  });

  it('it should return error', () => {
    return app.httpRequest().post('/api/user/register').send({ username: 'abcde', password: '123456' })
      .expect(200)
      .expect({
        code: 500,
        msg: 'The usename has been used',
      });
  });

  it('it should return unavliable username(to long)', () => {
    return app.httpRequest().post('/api/user/register').send({ username: '1234567891011', password: '123456' })
      .expect(422);
  });

  it('it should return unavliable username(to short)', () => {
    return app.httpRequest().post('/api/user/register').send({ username: '12', password: '123456' })
      .expect(422);
  });

  it('it should return unavliable paasword(to short)', () => {
    return app.httpRequest().post('/api/user/register').send({ username: 'hhhhhhhh', password: '12' })
      .expect(422);
  });

  after(() => {
    const ctx = app.mockContext();
    const user = ctx.model.user.findOne({ username: 'abcde' });
    console.log(user);
    ctx.model.User.findByIdAndDelete(user._id);
  });
});
