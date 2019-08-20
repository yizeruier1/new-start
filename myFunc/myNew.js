function myNew(main){
    // 创建实例
    let res = {}
    if (main.prototype !== null) {
        // 实例的 __proto__ 指向 构造函数的prototype
        res.__proto__ = main.prototype
    }
    // 执行构造函数  并把this指向实例
    var ret = main.apply(res, Array.prototype.slice.call(arguments, 1))
    // 如果构造函数返回了一个对象   则直接返回    否则返回实例
    if ((typeof ret === 'object' || typeof ret === 'function') && ret !== null) {
        return ret
    } else {
        return res
    }
}

function Person(name, age){
    this.name = name
    this.age = age
}
Person.prototype.sayName = function(){
    console.log('my name is ' + this.name)
}

let xiaoming = myNew(Person, 'xiaoming', 18)
console.log(xiaoming.name)
console.log(xiaoming.age)
xiaoming.sayName()