const bubbleSort = arr => {
    for(let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - 1 - i; j++) {
            // 把大的数 排到最后
            if(arr[j] > arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr
}

console.log(bubbleSort([2,3,4,1,5,9,6,8,7,0]))