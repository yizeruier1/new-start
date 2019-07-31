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

const jsontostr = o => {
    if(Object.keys(o).length  === 0){
        return "{}"
    }else{
        let res = '{'
        Object.keys(o).forEach((item, index) => {
            let str = '"' + item + '"' + ":"
            if(Object.prototype.toString.call(o[item]) === '[object Object]'){
                str += jsontostr(o[item])
                res += str
            }else{
                if(Object.prototype.toString.call(o[item]) === '[object String]'){
                    str = str + '"' + o[item] + '"'
                }else{
                    str += o[item]
                }
                res += str
            }
            if(index < Object.keys(o).length - 1){
                res += ","
            }
        })
        return res + '}'
    }
}

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

function json2str(o) {
    let arr = [];
    const fmt = function(s) {
        if(typeof s == 'object' && s !== null) return json2str(s); return /^(string)$/.test(typeof s) ? `"${s}"`: s;
    }
    for (var i in o) arr.push(`"${i}":${fmt(o[i])}`)
        return `{${arr.join(',')}}`
}

console.log(json2str(obj))

// console.log(JSON.parse(jsontostr(obj)))