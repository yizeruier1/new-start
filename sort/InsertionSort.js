const InsertionSort = arr => {
    // 假设第 0 个是排好序的数组， 从第 1 个开始插
    for (let i = 1; i < arr.length; i++) {
        let index = i - 1
        // 在排好序的数组里从最后一个往前找， 比要插入的大 则换位置
        while(index >= 0 && arr[index] > arr[index + 1]){
            let temp = arr[index + 1]
            arr[index + 1] = arr[index]
            arr[index] = temp
            index--
        }
    }

    return arr
}

console.log(InsertionSort([2, 3, 4, 1, 5, 9, 6, 8, 7, 0]))