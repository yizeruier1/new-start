 1 //循环组合
 2 function generateGroup(arr) {
 3     //初始化结果为第一个数组
 4     var result= arr[0];
 5     //从下标1开始遍历二维数组
 6     for(var i=1;i<arr.length;i++){
 7         //使用临时遍历替代结果数组长度(这样做是为了避免下面的循环陷入死循环)
 8         var size= result.length;
 9         //根据结果数组的长度进行循环次数,这个数组有多少个成员就要和下一个数组进行组合多少次
10         for(var j=0;j<size;j++){
11             //遍历要进行组合的数组
12             for(var k=0;k<arr[i].length;k++){
13                 //把组合的字符串放入到结果数组最后一个成员中
14                 //这里使用下标0是因为当这个下标0组合完毕之后就没有用了，在下面我们要移除掉这个成员
15                 result.push(result[0]+","+arr[i][k]);
16             }
17             //当第一个成员组合完毕，删除这第一个成员
18             result.shift();
19         }
20     }
21     //打印结果
22     console.log(result);
23 }
24 
25 generateGroup([["红色","蓝色"],["X","XL"],["10m","20m"]]);