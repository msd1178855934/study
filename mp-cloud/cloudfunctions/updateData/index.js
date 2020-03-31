// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

let db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
    let id = '66c996965ddbd5140056b62768cb109c'
    return await db.collection('data').doc(id).update({
        data: {
            description: 'this is a updated demo'
        }
    })
}