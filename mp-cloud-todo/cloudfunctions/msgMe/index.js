// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    let { OPENID, APPID } = cloud.getWXContext()
    let { formId, taskId } = event

    try {
        let todo = await cloud.database().collection('todos').doc(taskId).get()

        let result = await cloud.openapi.uniformMessage.send({
            touser: OPENID,
            weappTemplateMsg: {
                data: {
                    keyword1: {
                        value: todo._id
                    },
                    keyword2: {
                        value: todo.title
                    },
                    keyword3: {
                        value: todo.time
                    },
                    keyword4: {
                        value: todo.location
                    }
                },
                templateId: '43qP9fq_FUWO8ifsxiYcOzZDNXdeZmfMfVUxXEjeXn4',
                formId: formId,
                emphsisKeyword: 'keyword1.DATA'
            }
        })
        console.log(result)
        return result
    } catch (error) {
        console.log(error)
        return error
    }
}