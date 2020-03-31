// 云函数入口文件
const cloud = require('wx-server-sdk')
const TcbRouter = require('tcb-router')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    console.log(JSON.stringify(event))

    const app = new TcbRouter({event})

    app.use(async (ctx, next) => {
        ctx.data = {}
        ctx.data.openId = event.userInfo.openId
        await next()
    })

    app.router(['user', 'school'], async (ctx, next) => {
        ctx.data.from = 'mp-cloud'
        await next()
    })

    app.router('user', async (ctx, next) => {
        ctx.data.name = 'carl'
        ctx.data.role = 'developer'
        await next()
    }, async ctx => {
        ctx.data.nickName = 'ma'
        ctx.body = {code: 0, data: ctx.data}
    })

    app.router('school', async (ctx, next) => {
        ctx.data.name = 'home'
        ctx.data.url = 'home.com'
        await next()
    }, async ctx => {
        ctx.data.nickName = 'jialidun'
        ctx.body = { code: 0, data: ctx.data}
    })

    return app.serve()
}