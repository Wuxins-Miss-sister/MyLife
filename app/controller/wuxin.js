'use strict';

const Controller = require('egg').Controller;

class JspangController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(ctx)
    ctx.body = `${ctx}`;
  }
  //get
//   自由传参模式 
  async getGirl(){
    const {ctx} = this;
    ctx.body = ctx.query
  }
//   严格传参模式 多传参数模式
 async getGirl2(){
    const {ctx} = this;
    let name = ctx.params.name
    let age = ctx.params.age
    ctx.body='大哥你好，我是'+name+',今年'+age+'岁.欢迎光临红浪漫!'
    // http://127.0.0.1:7001/getGirl2/xiaog/12
  }
  //06.POST请求和参数的接收
// 这节学习一下Egg.js中的POST请求，POST是在开发中经常使用的请求方式，比如表单数据的传递和图片的上传，
// 都需要用到POST请求。这些是GET请求无法完成的。
async add(){
    const ctx = this.ctx
    ctx.body={
      status: 200,
      data:ctx.request.body
    }
  };
}
module.exports = JspangController;
