// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    let { OPENID, APPID } = cloud.getWXContext()
    let { formId, taskId } = event

    try {
        const result = await cloud.openapi.uniformMessage.send({
            touser: OPENID,
            weappTemplateMsg: {
                page: 'page/page/index',
                data: {
                    keyword1: {
                        value: 'testID'
                    },
                    keyword2: {
                        value: 'testTitle'
                    },
                    keyword3: {
                        value: 'testTime'
                    },
                    keyword4: {
                        value: 'testLocation'
                    }
                },
                templateId: '43qP9fq_FUWO8ifsxiYcOzZDNXdeZmfMfVUxXEjeXn4',
                formId: formId,
                emphasisKeyword: 'keyword1.DATA'
            }
        })
        console.log(result)
        return result
    } catch (err) {
        console.log(err)
        return err
    }
}