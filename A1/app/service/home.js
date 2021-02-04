'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async echo() {
    return { ok: 1 };
  }
}

module.exports = HomeService;

