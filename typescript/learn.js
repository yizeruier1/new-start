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
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
