// // // let str = '      hello WORLD I am vIkToR         ';
// // //
// // // // let indexOf = str.indexOf('O');
// // // //
// // // // document.write(indexOf);
// // // // document.write('<br>');
// // // //
// // // // let lasIndexOf = str.lastIndexOf('O');
// // // //
// // // // document.write(lasIndexOf);
// // // // document.write('<br>');
// // // //
// // // // let charAt = str.charAt(6);
// // // //
// // // // document.write(charAt);
// // // // document.write('<br>');
// // // //
// // // // let charCodeAt = str.charCodeAt(6);
// // // //
// // // // document.write(charCodeAt);
// // // // document.write('<br>');
// // // //
// // // //
// // // // let s = str.concat(' XXX');
// // // //
// // // // document.write(s)
// // // // document.write('<br>')
// // // // document.write(str)
// // // //
// // // //
// // // //
// // // // let sliced = str.slice(2, 7);
// // // //
// // // //
// // // // document.write(sliced)
// // // //
// // // // let strings = str.split(' ');
// // // //
// // // // console.log(strings);
// // // //
// // // //
// // // // let symbols = [80, 22, true, 'HELLO'];
// // // //
// // // // let s = symbols.join('+');
// // // //
// // // //
// // // // console.log(s);
// // // //
// // // // let s = str.toUpperCase();
// // // // console.log(s);
// // // // let l = str.toLowerCase();
// // // // console.log(l);
// // // //
// // // //
// // // // if (prompt().toUpperCase() === 'HELLO') {
// // // //     document.write('Hi')
// // // // }
// // // //
// // // // let b = str.startsWith('Hell');
// // // //
// // // // document.write(b);
// // // //
// // // // let end = str.endsWith('oR');
// // // //
// // // // document.write('<hr>')
// // // // document.write(end)
// // // //
// // // // document.write('<hr>')
// // // //
// // // // let isInclude = str.includes("I'm");
// // // // document.write(isInclude)
// // //
// // // let symb = prompt();
// // //
// // // let b = str.includes(symb);
// // //
// // // alert(b);
// // //
// // // // let s = str.trim();
// // // //
// // // // console.log(str);
// // // // console.log(s);
// //
// //
// // ////// FUNCTIONS
// //
// // // function docWriter(param) {
// // //     document.write(`${param} I AM FROM FUNCTION`);
// // //     document.write('<br>')
// // // }
// // //
// // // docWriter('HELLO');
// // // docWriter(true);
// // // docWriter(22);
// // // docWriter([1,23,4,5]);
// // // docWriter('');
// // // docWriter();
// //
// // // let actionXZCZ = prompt('Entr action')
// // // function calculator(action, a, b = 10) {
// // //
// // //     if (action === '+') {
// // //         sumator(a, b)
// // //     }
// // //
// // //     if (action === '-') {
// // //         vidnimator(a, b)
// // //     }
// // // }
// // //
// // // function sumator(x, y) {
// // //     document.write(x + y)
// // // }
// // //
// // // function vidnimator(x, y) {
// // //     document.write(x - y)
// // // }
// // //
// // // calculator(actionXZCZ, 10);
// //
// //
// // // // HOISTING
// // // let resOfSumator = sumator(10, 999);
// // // function sumator(a, b) {
// // //     if (a < b) {
// // //         return [2,54,576,0];
// // //     } else {
// // //         return {name: 'Alex'}
// // //     }
// // // }
// // //
// // //
// // // keyLogger(resOfSumator);
// // //
// // // function keyLogger(objectOrArray) {
// // //     for (const key in objectOrArray) {
// // //         document.write(key);
// // //         document.write('<br>')
// // //     }
// // // }
// // //
// // // declar();
// // //
// // // function declar() {
// // //     console.log(22);
// // // }
// // //
// // // let eprs = (a, b) => {
// // //     console.log(a + b);
// // // };
// // //
// // // eprs();
// // //
// // //
// // // function args(a, b) {
// // //     console.log(arguments);
// // //     let sum = 0;
// // //     for (const aElement of arguments) {
// // //         console.log(aElement);
// // //         sum += aElement
// // //     }
// // //
// // //     console.log(sum / arguments.length);
// // // }
// // //
// // //
// // // args(10, 6, true, 'TEST', [1,5,6], {name: 'Dima'});
// // // // args(10, 6, 0, 7, -5, 10, -200, 0);
// //
// //
// // (() => {
// //     document.write('I AM SELF INVOKE')
// // })();
//
//
//
//
// // let x = 10;
// // const pi = 3.14;
// //
// // x = 2.71;
// // // pi = 3;
//
// //
// // {
// //     let x = 10;
// //     var z = 'I AM Z';
// // }
// //
// // console.log(z);
// // console.log(x);
//
//
//
//
// // if (10 >  5) {
// //     let z = 'RRRR';
// //
// //     console.log(z);
// // }
// //
// //
// // console.log(z);
//
// // {
// //     var a = 10;
// //     var b = 9;
// // }
// //
// // console.log(a);
// // console.log(b);
//
// let array = [1,4567];
//
//
// for (const i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
// }
//
// for (const arrayElement of array) {
//     arrayElement = '2'
// }
//
//
// console.log(i);
//
//
// let arr = [1,9,'TEST', true];
//
// let recursator2000 = (array, i) => {
//     if (i < array.length) {
//         console.log(array[i]);
//         recursator2000(array, ++i);
//     }
// };
//
// recursator2000(arr, 0);
//
//
// function f(action, two, tree) {
//     console.log(one);
//     console.log(two);
//     console.log(tree);
//
// }
//
//
// function sum(a, b) {
//     console.log(a + b);
// }
//
// f(5, "+", 0);
//
// let p = prompt('Eter');
//
// function calculator(action, a, b) {
//     if (typeof action !== 'string') {
//         return;
//     }
//
//     if (action === '+') {
//         sumator(a, b)
//     }
//
//     if (action === '-') {
//         vidnimator(a, b)
//     }
//
// }
//
// function sumator(x, y) {
//     document.write(x + y)
// }
//
// function vidnimator(x, y) {
//     document.write(x - y)
// }
//
// calculator(p, 10, 90);
//
//
//
//
//
       // [0: 10, 1: 20, 2: 30]
// let arr = [10,20,30];
//
// let objetc = {
//     name: 'Fantom',
//     age: 3333,
//     childer: {
//         name: 'Doma',
//         sister: 'Ira',
//     }
// };
//
//
// for (const key in objetc) {
//     // console.log(key);
//
//     if (typeof objetc[key] === "object") {
//         for (const embededKey in objetc[key]) {
//             console.log(objetc[key][embededKey]);
//         }
//     }
// }
//
// let x = 0;
//
// while (x in arr) {
//     console.log(x);
//     x++
// }
