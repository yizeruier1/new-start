const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if(left >= right) return
    // 假设 以 arr[0] 为基准
    let base = arr[0]
    let l = left + 1
    let r = right
    while(l < r){
        // 把大的排到右边  小的排到左边
        while (l < r && arr[l] <= base){
            l++
        }
        while (l < r && arr[r] >= base) {
            r--
        }
        // 交换位置
        let temp = arr[l]
        arr[l] = arr[r]
        arr[r] = temp
    }
    // 把基准数 放到 他应该在的位置
    base = arr[l]
    arr[l] = arr[0]
    arr[0] = base
    // 递归 继续排
    quickSort(arr, 0, l)
    quickSort(arr, l + 1, arr.length)
}

let arr = [2, 3, 4, 1, 5, 9, 6, 8, 7, 0]
quickSort(arr)
arr