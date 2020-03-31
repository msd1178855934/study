// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    try {
        const result = await cloud.openapi.wxacode.get({
            path: 'page/index/index',
            width: 430
        })
        return await cloud.uploadFile({
            cloudPath: 'getCode.png',
            fileContent: result.buffer
        })
    } catch (err) {
        console.log(err)
        return err
    }
}