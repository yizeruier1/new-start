let str = 'aabcdddefghjabcdefsi'

const sort1 = str => {
    let text = str.trim()
    if (text === '') throw "字符串不能为空"

    let objMap = {}
    str.split('').forEach(item => {
        if (objMap[item]){
            objMap[item] += 1
        }else{
            objMap[item] = 1
        }
    })

    let objKeys = Object.keys(objMap)
    let res = {
        num: objMap[objKeys[0]],
        key: objKeys[0]
    }

    objKeys.forEach(item => {
        if (objMap[item] > res.num) {
            res.num = objMap[item]
            res.key = item
        }
    })
}

sort1(str)