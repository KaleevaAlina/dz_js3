
/* Задача 1.Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе. */

let arr = ['a ', 'b ', 'c '];
let arr2 = [1, 2, 3];   
let arr3 = arr.concat(arr2);
console.log('Задание 1',  arr3 );


/*  Задача 2.Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3 */
let p = ['a', 'b', 'c'];
console.log('Задание 2', p.concat([1, 2, 3]));

/* Задача 3.Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]. */
let i = [1,2,3];
   i.reverse();
   console.log('Задание 3', i);

/* Задача 4.Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3]. */
let r= [1,2,3,4,5];
   let w = r.slice(0,3)
   console.log('Задание 4', w);

/* Задача 5.Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5]. */
let k= [1,2,3,4,5];
   let s = k.slice(3,5)
   console.log('Задание 5', s);

/* Задача 6.Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей. */
let options = {
   js:'test',
   jq: 'hello',
   css: 'world'
};
   console.log('Задание 6', Object.keys(options)); 

/* Задача 7.Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке. */



/* Задача 8.Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. */

/* let arrayMull = [ [1,2,3], [4,5] , [6] ];
for (var nn = 0; nn < arrayMull.length; nn++){
    for (var i2 = 0;  i2 < arrayMull[nn].length; i2++ ){
        console.log(arrayMull[nn][i2]);
    }
}
let result = arrayMull[nn][i2].reduce((sum, current) => sum + current, 0);
console.log(result);
*/


const x = [[1, 2, 3], [4, 5], [6]];
const x1 = [];
let result = x1.concat(...x);

console.log(result);
let sum8 = 0;
for (let i8 = 0; i8 < result.length; i8++) {
   sum8 += result[i8];
}
console.log('Задача 8',sum8);

/* Задача 9.Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. */
let rr = [
   [
       [1, 2],
       [3, 4]
   ],
   [
       [5, 6],
       [7, 8]
   ]
       ];
let ee = [];
let result3 = ee.concat(...rr); 
let y = [];
let result4 =y.concat(...result3); 
console.log(result4);

let sum9 = 0;
for (let i9 = 0; i9 < result4.length; i9++){
   sum9+= result4[i9];
}
console.log('Задача 9: ', sum9);

/* Задача 10.Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны. */

let v1 = [1,2,3];
let v2 = [1,2,3];
if (v1 == v2){
   console.log('Задача 10:', ' Массивы совпадают!');
} else {
   console.log('Задача 10:', ' Массивы не совпадают');
}

if (v1[0] == v2[0] && v1[1] == v2[1] && v1[2] == v2[2] ){
   console.log('Задача 10: ', 'Массивы совпадают!');
} 
//Сравнение массивов
let ar1=[1,2,3];
let ar2=[1,2,3];
let ii1 = ar1.length;
let ii2 = ar2.length;
 if (ii1 == ii2) {
   while (ii1--) {
        if (ar1[ii1] == ar2[ii1]) {
       // console.log(ar1[ii1],ar2[ii1]);
        } else {
        // console.log(ar1[ii1],ar2[ii1]);
         console.log('Задача 10:  Массивы не совпадают!!!');
         break;
        }
        console.log('Задача 10:  Массивы совпадают!!!');
        }
 } else {
        console.log('Задача 10:  Количество элементов в массивах не равны');
 }

/* Задача 11.Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел(используйте map). */
let numbers = [10,20,30,40];
console.log(numbers );
let newarr = numbers.map ( item => item**2);
   console.log('Задача 11:',  newarr );


/* Задача 12.Дан массив с числами. Оставьте в нем только отрицательные числа.(filter). */

let t = [10, -20, 30, -40];
let t12 = t.filter(function(number10) {
   return number10 < 0;
 });
console.log('Задача 12: ',t12);

/* Задача 13.Дан массив с числами. Найдите сумму этих чисел.(reduce). */
let arr13 = [100,200,300,400];
let result13 = arr13.reduce((sum, current) => sum + current, 0);
console.log ('Задача 13:',  result13);

/* Задача 14.Создайте объект city1 (var city1 = {}), укажите у него свойства name со значением «Город2» и population со значением 10 млн. */
var city1 = {};
city1.name = "Город2";
city1.population = '10 млн'
console.log('Задача 14.1:',  city1) ;

/* Создайте объект city2 через нотацию {name: "Город1", population: 1e6}. */
let city2 = {
   name: "Город1",
   population: 106
   }
   console.log('Задача 14.2:', city2) ;

/* Создайте у объектов city1 и city2 методы getName(), которые вернут соответствующие названия городов */
city1.getName = function() {
   return city1.name;
 };
console.log('Задача 14.3:', city1.name);

city2.getName = function() {
   return city2.name;
};
console.log('Задача 14.3:', city2.name);

/* Создайте методы exportStr() у каждого из объектов. Этот метод должен возвращать информацию о городе в формате «name=Город population=10000000». Для второго города будет строка со своими значениями. */


/* 
Задача 15.Выведите на экран текущие день, месяц и год в формате 'год-месяц-день'. */
let d = new Date();
let year = d.getFullYear();
let month = d.getMonth();
let day = d.getDate();
console.log('Задача 15:', `${year}-${month}-${day} `);

/* Задача 16.Выведите на экран текущий день */
let d16 = new Date();
let day16 = d16.getDate();
console.log('Задача 16: День:', ` ${day} `);
/* Выведите на экран текущий месяц */
let month16 = d16.getMonth();
console.log('Задача 16: Месяц:', ` ${month16+1} `);
/* Выведите на экран текущий год */
let year16 = d16.getFullYear();
console.log('Задача 16: Год:', ` ${year16} `);

/* Выведите на экран количество минут с 1-го января 1970 года до настоящего момента времени */
let msec = d16.getTime();
console.log('Задача 16: Количество миллисекунд:', ` ${msec} `);
let sec = msec/1000;
console.log('Задача 16: Количество секунд:', ` ${sec} `);
let min = Math.floor(sec/60);
console.log('Задача 16: Количество минут:', ` ${min} `);

