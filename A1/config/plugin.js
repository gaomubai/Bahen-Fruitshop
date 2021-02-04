'use strict';

/** @type Egg.EggPlugin */
module.exports = {

  static: {
    enable: true,
  },
  // had enabled by egg
  mongoose: {
    enable: true,
    package: 'egg-mongoose' },

  validate: {
    enable: true,
    package: 'egg-validate' },

  jwt: {
    enable: true,
    package: 'egg-jwt' },
};
