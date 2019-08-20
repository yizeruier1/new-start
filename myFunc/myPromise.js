// 大致原理应该是这样的


function myPromise(main){
    let self = this
    // 初始状态
    self.status = 'pending'
    // resolve 时的 res
    self.value = null
    // rejected 时的 err
    self.reason = null

    function resolve(value){
        if (self.status === 'pending'){
            self.status = 'fullfilled'
            self.value = value
        }
    }

    function reject(reason) {
        if (self.status === 'pending') {
            self.status = 'rejected'
            self.reason = reason
        }
    }

    try{
        main(resolve, reject)
    }catch(e){
        reject(e)
    }
}

// then  挂载到原型上
myPromise.prototype.then = function (onFullfilled, onRejected) {
    let self = this
    if (self.status === 'fullfilled') {
        onFullfilled(self.value)
    }else{
        // 不是成功状态就reject
        onRejected(self.reason)
    }
}

var test = new myPromise((resolve, reject) => resolve(1)).then(res => {
    console.log(res)
})