const flatArr = arr => {
    let res = []
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            res = res.concat(flatArr(arr[i]))
        }else{
            res.push(arr[i])
        }
    }
    return [...new Set(res)]
}

let arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]
let res = flatArr(arr)
console.log(res)