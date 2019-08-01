var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 基本数据类型
var boo = true;
var num = 123;
var str = "string";
var str1 = "Hello " + num + " World";
// void 无返回值 和 null undefined
var voi = null; // 或者undefined
var nul = null;
var unde = undefined;
//  区别是undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 等其他类型的变量  例如：
var num1 = unde;
// any 类型， 允许被赋值为任意类型，  /  声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值
var anything = 'stephen';
anything = 777;
// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
var anything1;
anything1 = 'string';
anything1 = 111;
//  如果不指定类型 但是 赋了初值,   ts会依照类型推论   推断一个类型  如下则为 string    再赋其他类型值会报错
var anything2 = 'string';
//  联合类型  生命多种类型  用 | 隔开
var union = 123;
union = '124';
//  当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
function getLength(something) {
    //  return something.length;   length 不是 string 和 number 的共有属性  所以会报错
    return something.toString();
}
// 调用  tom 的形状必须和接口 Person 一致
var Tom = {
    id: 123,
    name: 'Tom',
    age: 18
};
//  在 TS 中声名 数组
var arr = [1, 2, 3, 4, 5];
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [1, 1, 2, 3, 5];
//  在 TS 中声名 函数    可选参数 只能在最后面
function sum(x, y, z, a) {
    if (z === void 0) { z = 1; }
    return x + y + z;
}
// => 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型
var sum1 = function (x, y) {
    return x + y;
};
console.log(sum(3, 4));
console.log(sum1(3, 4));
//   ...rest   获取剩余参数
function mypush(arr) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        arr.push(item);
    });
    console.log(arr);
}
mypush([], 1, 2, 3, 4, 5);
// 函数重载   允许一个函数重复定义，在调用时根据参数的不同  做不同的处理
//  当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候    可以使用类型断言    来避免ts报错
function getLength2(something) {
    // <类型>值   写法
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
    // 值 as 类型     写法   在react的jsx中   必须使用这种写法
    // if ((something as string).length) {
    //     return (something as string).length;
    // } else {
    //     return something.toString().length;
    // }
}
var usetype = 123;
function handleEvent(ele, event) {
    ele.addEventListener(event, function (e) {
        // do something
        console.log(event);
    });
}
handleEvent(document.getElementById('hello'), 'click');
// 枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等    值会从第一个开始   从 1 开始递增
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
;
// Days["Sun"] === 0  true              console.log(Days[0] === "Sun"); // true
// Days["Mon"] === 1  true              console.log(Days[1] === "Mon"); // true
// Days["Tue"] === 2  true              console.log(Days[2] === "Tue"); // true
// Days["Sat"] === 6  true              console.log(Days[6] === "Sat"); // true
// 类 相关
// TypeScript class  有三种 -访问- 修饰符
// 1、 public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public
// 2、 private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
// 3、 protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.sayHi = function () {
        console.log("hello I'm " + this.name);
    };
    return Animal;
}());
var Cat = new Animal('Cat', 18);
console.log(Cat.name);
console.log(Cat.sayHi());
// abstract 用来声名抽象类   抽象类不允许被实例化     抽象类中的 抽象方法 必须 被子类实现
var Animal1 = /** @class */ (function () {
    function Animal1(name) {
        this.name = name;
    }
    return Animal1;
}());
var Cat1 = /** @class */ (function (_super) {
    __extends(Cat1, _super);
    function Cat1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 子类必须实现（implement）  sayHi方法
    Cat1.prototype.sayHi = function () {
        return "My name is " + this.name;
    };
    return Cat1;
}(Animal1));
var cat1 = new Cat1('Tom');
