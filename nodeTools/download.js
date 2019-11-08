const request = require('request')
const fs = require('fs')
const path = require('path')

function downloadFile(uri, callback){
	const req = request(uri)

	// 用源文件名命名
	const name = req.path.split('/')
    var stream = fs.createWriteStream(name[name.length - 1])

    // 下载
    req.pipe(stream).on('close', callback)
}

var fileUrl  = 'https://cdn.pixabay.com/photo/2019/11/03/01/56/landscape-4597742_1280.jpg';
// var fileUrl = 'https://baobao-3d.bj.bcebos.com/16-0-205.shuimian.mp4'
downloadFile(fileUrl, function(){
    console.log('下载完毕')
})