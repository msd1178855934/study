// 云函数入口文件
const cloud = require('wx-server-sdk')
const got = require('got')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    let response = await got('https://mp.weixin.qq.com/')
    return response.body 
}