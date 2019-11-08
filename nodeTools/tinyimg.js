const fs 		= require('fs')
const path 		= require('path')
const tinify 	= require('tinify')

// 需要进行压缩的 文件格式
const imgs = ['jpg', 'jpeg', 'png', 'gif']

// 单个 key 可以压缩 500 张图片  注册 key -> https://tinypng.com/developers
tinify.key = "JfMC1z1Y5dVpqXwNByBqq5kDjTWrlN96"

function fileDisplay(filePath, deep){
    fs.readdir(filePath,(err, files) => {
        if(err) throw new Error('获取文件目录失败')

        files.forEach(filename => {
            let filedir = path.join(filePath, filename)
            fs.stat(filedir, (eror, stats) => {
                if(eror) throw new Error('获取文件信息失败')

                let isFile = stats.isFile()
                let isDir = stats.isDirectory()
                if(isFile && isImg(filename)){
                	console.log(`压缩 - ${filename}`)
                    // 压缩图片 放到宏任务队列
                    setTimeout(()=>{
                    	tinify.fromFile(filedir).toFile(filedir)
                    }, 0)
                }
                if(isDir && deep){
                    fileDisplay(filedir)
                }
            })
        })
    })
}

const isImg = filename => {
	if(!filename) return false
	const name = filename.toLowerCase()
	return imgs.some(item => name.indexOf(item) !== -1)
}

// 压缩当前目录 img 文件夹下 所有 图片
let filePath = path.resolve('./img')

// deep 表示 深度压缩， false -> 只压缩当前层级目录下的图片，true -> 压缩包括所有子目录    默认为 true
// usage -> 安装 tinify，cnpm i tinify 或 yarn tinify， 不要加 --S 或 --D  会污染 package.json
// usage -> 修改 路径，  运行 该文件  node tinyimg.js
fileDisplay(filePath, deep = true)