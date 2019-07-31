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



