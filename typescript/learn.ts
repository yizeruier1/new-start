//  TS 主要是为了解决 JS 弱类型和没有命名空间，导致很难模块化，不适合开发大型程序


// 基本数据类型
let boo: boolean = true
let num: number = 123
let str: string = "string"
let str1: string = `Hello ${num} World`


// void 无返回值 和 null undefined
let voi: void = null   // 或者undefined
let nul: null = null
let unde: undefined = undefined

//  区别是undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 等其他类型的变量  例如：
let num1: number = unde



// any 类型， 允许被赋值为任意类型，  /  声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值
let anything: any = 'stephen'
anything = 777
// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
let anything1
anything1 = 'string'
anything1 = 111
//  如果不指定类型 但是 赋了初值,   ts会依照类型推论   推断一个类型  如下则为 string    再赋其他类型值会报错
let anything2 = 'string'


//  联合类型  生命多种类型  用 | 隔开
let union: number | string = 123
union = '124'
//  当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
function getLength(something: string | number): string {
    //  return something.length;   length 不是 string 和 number 的共有属性  所以会报错
    return something.toString();
}



//  在 TS 中声名对象 -- Interfaces
interface Person {
    name: string;
    age: number;
    // 声名  可选的属性
    gender?: string;
    // 自定义属性  一旦定义了自定义属性，那么确定属性和可选属性的类型都必须是它的类型的子集
    [propName: string]: number | string;
    // readonly 只读属性    只能在第一次给对象赋值的时候  赋值
    readonly id: number
}
// 调用  tom 的形状必须和接口 Person 一致
let Tom: Person = {
    id: 123,
    name: 'Tom',
    age: 18
}


//  在 TS 中声名 数组
let arr: number[] = [1, 2, 3, 4, 5]
let arr1: Array<number> = [1, 2, 3, 4, 5]
interface arr {
    [index: number]: number;
}
let arr2: arr = [1, 1, 2, 3, 5];



//  在 TS 中声名 函数    可选参数 只能在最后面
function sum(x: number, y: number, z: number = 1, a?: number): number{
    return x + y + z
}
// => 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型
let sum1: (x: number, y: number) => number = function (x: number, y: number): number{
    return x + y
}

console.log(sum(3, 4))
console.log(sum1(3, 4))

//   ...rest   获取剩余参数
function mypush(arr: any[], ...items: any[]): void{
    items.forEach(function (item) {
        arr.push(item);
    });
    console.log(arr)
}

mypush([], 1, 2, 3, 4, 5)

// 函数重载   允许一个函数重复定义，在调用时根据参数的不同  做不同的处理



//  当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候    可以使用类型断言    来避免ts报错
function getLength2(something: string | number): number {
    // <类型>值   写法
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }

    // 值 as 类型     写法   在react的jsx中   必须使用这种写法
    // if ((something as string).length) {
    //     return (something as string).length;
    // } else {
    //     return something.toString().length;
    // }
}



//   类型别名 =>   使用type创建    主要用于联合类型
type param = string | number | Person
let usetype: param = 123

// 用字符串也可以
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    ele.addEventListener(event, function(e: any): void{
        // do something
        console.log(event)
    })
}

handleEvent(document.getElementById('hello'), 'click')



// 枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等    值会从第一个开始   从 1 开始递增
enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat };
// Days["Sun"] === 0  true              console.log(Days[0] === "Sun"); // true
// Days["Mon"] === 1  true              console.log(Days[1] === "Mon"); // true
// Days["Tue"] === 2  true              console.log(Days[2] === "Tue"); // true
// Days["Sat"] === 6  true              console.log(Days[6] === "Sat"); // true






// 类 相关
// TypeScript class  有三种 -访问- 修饰符
// 1、 public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public
// 2、 private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
// 3、 protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的

class Animal {
    public name: string;
    private age: number;
    public constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }

    sayHi(): void{
        console.log(`hello I'm ${this.name}`)
    }
}

let Cat: Animal = new Animal('Cat', 18)
console.log(Cat.name)
console.log(Cat.sayHi())



// abstract 用来声名抽象类   抽象类不允许被实例化     抽象类中的 抽象方法 必须 被子类实现
abstract class Animal1 {
    public name: string;
    public constructor(name: string) {
        this.name = name;
    }
    public abstract sayHi();
}

class Cat1 extends Animal1 {
    // 子类必须实现（implements）  sayHi方法
    public sayHi(): string {
        return `My name is ${this.name}`
    }
}

let cat1: Animal1 = new Cat1('Tom');




// 类实现(implements)接口  ->  提取多个类的公共方法 为 一个接口（interfaces）   用 implements 关键字来实现
interface Alarm {
    alert(): string
}

interface Light {
    lightOn()
    lightOff()
}

class Car implements Alarm, Light {
    alert() {
        console.log('Car alert');
        return '123'
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}




// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray<string>(3, 'x');