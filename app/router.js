'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/jspang', controller.home.jspang);
  router.get('/my', controller.wuxin.index);
  router.get('/getGirl', controller.wuxin.getGirl);
  router.get('/getGirl2/:name/:age', controller.wuxin.getGirl2);
  router.post('/add', controller.wuxin.add);
};
