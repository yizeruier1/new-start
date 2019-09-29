function New(fn) {
    // 实例
    const res = {}

    // __proto__ 指向构造函数的原型
    if(fn.prototype !== null) res.__proto__ = fn.prototype

    // 执行构造函数
    let ret = fn.apply(res, Array.prototype.slice.call(arguments, 1))

    // 如果构造函数 返回了 对象 则 返回这个对象
    if((typeof ret === 'object' || typeof ret === 'function') && ret !== null) return ret

    // 否则返回实例
    return res
}

function Person(name){
    this.name = name
}
Person.prototype.sayHi = function(){
    console.log(`Hi${this.name}`)
}

let Tom = New(Person, 'Tom')
console.log(Tom.name)
Tom.sayHi()