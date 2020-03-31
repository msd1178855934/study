// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

let db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
    let id = '66c996965ddb2e14002fcb336d0a836e'
    return await db.collection('data').doc(id).remove()
}