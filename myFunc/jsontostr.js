const obj = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4, 5],
        e: {
            f: 'hello'
        }
    },
    g: 6
}

function jsontostr(obj){
    let type = typeof obj
    // 不是 Object 直接返回
    if (type !== 'object' || type === null){
        if(/string|function|undefined/.test(type)){
            obj = '"' + obj + '"'
        }
        return String(obj)
    } else {
        let res = []
        let isArr = (obj && obj.constructor === Array)

        for(k in obj){
            let item = obj[k]
            let types = typeof item
            if (/string|function|undefined/.test(types)) {
                item = '"' + item + '"'
            } else if (types === 'object') {
                item = jsontostr(item)
            }

            res.push(((isArr ? '' : '"') + k + (isArr ? ':' : '":')) + String(item))
        }
        return (isArr ? '[' : '{') + String(res) + (isArr ? ']' : '}')
    }
}

jsontostr({b: undefined})