const tf = require('@tensorflow/tfjs-core')
const tfl = require('@tensorflow/tfjs-layers')
const regeneratorRuntime = require('regenerator-runtime')

//index.js

Page({
    async onReady() {
        const camera = wx.createCameraContext()

        const net = await this.loadModel()

        this.setData({result: 'loading'})
        let count = 0
        const listener = camera.onCameraFrame((frame) => {
            count++;
            if (count === 10) {
                if (net) {
                    this.predict(frame)
                }
                count = 0
            }
        })
        listener.start()
    },

    async loadModel() {
        const net = await tfl.loadLayersModel('http://localhost:8000/model.json')
        net.summary()
        return net
    },

    async predict(net, frame) {
        const imgData = {data: new Unit8Array(frame.data), width: frame.width, height: frame.height}
        const x = tf.tidy(() => {
            const imgTensor = tf.browser.fromPixels(imgData, 4)
            const d = Math.floor((frame.height - frame.width) / 2)
            const imgSlice = imgTensor.slice([d, 0, 0], [frame.width, -1, 3])
            const imgResize = tf.image.resizeBilinear(imgSlice, [28, 28])
            return imgResize.mean(2)
        })
        const y = await net.predict(x.expandDims(0)).argMax(1)
        const res = y.dataSync()[0]
        this.setData({result: res})
    }

})
