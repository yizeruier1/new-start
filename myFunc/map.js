let arr = [1,2,3,3,4,4,4,5,5,5,5,5,5,6,7,8,8,9]
let map = new Map()
map.set(arr[0], 1)

arr.forEach(item => {
  if (map.has(item)) {
    map.set(item, map.get(item) + 1)
  } else {
    map.set(item, 1)
  }
})

let res = {
  key: null,
  value: 0
}
map.forEach(function(val, key){
  if (val > res.value) {
    res = {
      key: key,
      value: val
    }
  }
})

console.log(res)