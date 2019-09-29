const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left >= right) return
    let i = left
    let j = right
    // 假设 以第一项为基准  并把他存起来
    const baseVal = arr[i]
    while (i < j) {
        // 从右边开始找  比基准值小的  放到左边
        while (i < j && arr[j] >= baseVal) {
            j--
        }
        arr[i] = arr[j]
        // 从左边开始找  比基准值大的  放到右边
        while (i < j && arr[i] <= baseVal) {
            i++
        }
        arr[j] = arr[i]
    }
    // 最后 i等于j 的位置就是基准值应该在的位置 
    arr[i] = baseVal
    // 递归 继续排
    quickSort(arr, left, i - 1)
    quickSort(arr, i + 1, right)
}

let arr1 = [2, 3, 4, 1, 5, 9, 6, 8, 7, 0]
quickSort(arr1)