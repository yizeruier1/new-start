const selectionSort = arr => {
    if(!arr || arr.length < 2) return arr
    for(let i = 0; i < arr.length; i++){
        // 保存最小数的下标
        let min = i
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]) min = j
        }
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
    return arr
}

let arr1 = [2, 3, 4, 1, 5, 9, 6, 8, 7, 0]
console.log(selectionSort(arr1))