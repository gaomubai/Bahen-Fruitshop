/* eslint-disable object-shorthand */
/* eslint-disable strict */
module.exports = {
  success: function({ data = null, msg = 'Request successfully' }) {
    if (data === null) {
      this.ctx.body = {
        code: 200,
        msg,
      };
    } else {
      this.ctx.body = {
        code: 200,
        data: data,
        msg,
      };
    }
    this.ctx.status = 200;
  },
};
