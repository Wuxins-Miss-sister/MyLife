'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hello world';
  }
  async jspang() {
    const { ctx } = this;
    // console.log(ctx)
    ctx.body = {name:'1111'};
  }
}

module.exports = HomeController;
