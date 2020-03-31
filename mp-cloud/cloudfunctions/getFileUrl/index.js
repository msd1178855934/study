// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    const fileList = ['cloud://poetry-dev.706f-poetry-dev-1300051147/326600.png']
    return await cloud.getTempFileURL({
        fileList: fileList
    })
}