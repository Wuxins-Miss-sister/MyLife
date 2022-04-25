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

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1650626523557_7211';

  // add your middleware config here
  config.middleware = [];
  config.security = {
    csrf :{
      enable:false,
    }
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,PUT,POST,DELETE'
  }

  config.security = {
    csrf: {
      ignore: ctx => {
        if (ctx.request.url === `/${config.adminPath}/product/doUpload`) {
          return true;
        } else {
          return false;
        }
      }
    },
    domainWhiteList: ['http://localhost:8081']
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  return {
    ...config,
    ...userConfig,
  };
};
