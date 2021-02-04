/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */

module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  config.security = {
    csrf: {
      enable: false,
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1611638743594_4801';

  // add your middleware config here
  config.middleware = [];

  // mongoose
  config.mongoose = {
    url: 'mongodb://127.0.0.1/CSC301A1',
    options: {
      useCreateIndex: true,
    },
  };

  // jwt
  config.jwt = {
    secret: '12312456',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
