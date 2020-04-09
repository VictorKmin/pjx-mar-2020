// const numbers = [11, -1, 12, 45, 22, 85, 80];
// let numbers = ['11', '-1', '12/', '45', '0', '2692', '333333333'];
const numbers = ['Dima', 'Olga', 'Anrii', 'Iva', 'Yarko', 'Oleg'];
// let numbers = [
//     {name: 'Dima', age: 10},
//     {name: 'Nastya', age: 2},
//     {name: 'Volodya', age: 1},
//     {name: 'Yarko', age: 3},
//     {name: 'Yevhen', age: 1},
//     {name: 'Taras', age: 4}
// ];
//
// numbers.sort((a, b)=> {
//     // if (a < b) {
//     //     return -1
//     // } else {
//     //     return 1
//     // }
//
//     return a.age - b.age
// });
// // // numbers.sort();
// //
// console.log(numbers);
//
// let strings = numbers.filter((value) => value.length > 4);
//
// console.log(strings);
//
//
// numbers.forEach((value, index) => {
//     if (index % 2 !== 0) {
//         return;
//     }
//     console.log(value);
// })
// let map = numbers.map((value, index) => {
//     return {
//         name: value,
//         id: index+1
//     };
// });
// //
// console.log(map);
// console.log(numbers);
//
// let string = numbers.find(value => {
//     return value === 'Yarko'
// });
//
// console.log(string);
//
//
// let number = numbers.findIndex(value => {
//     return value.name === 'Yarko'
// });
//
// console.log(number);
//
// let reverse = numbers.reverse();
//
// console.log(reverse);
//
// let flat = numbers.flat(7);
//
// console.log(flat);
// let b = numbers.some(value => value > 100);
// let b = numbers.every(value => value > -10);
//
// console.log(b);
//
//
// numbers.forEach(value => {
//     if (value.age > 18) {
//         return;
//     }
//
//     console.log(value);
// })
//
//
// let number = numbers.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue.age;
// }, 0);
//
// console.log(number);
//
// function cleanHouse(isJobDone, cb) {
//     if (isJobDone) {
//         cb(null, 200)
//     } else {
//         cb('Clean house first!')
//     }
// }
//
//
// cleanHouse(
//     true,
//     function (err, reward) {
//         if (err) {
//             console.log('Oops, ' + err)
//         } else {
//             console.log('Hooray I got a: ' + reward)
//         }
//     }
// )
//
//
function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.sayHello = function () {
    console.log(this.name);
}

// function Developer(name, age, skill) {
//     this.name = name;
//     this.age = age;
//     this.skill = skill;
// }
//
// // Developer.prototype = User.prototype;
// // Developer.prototype.__proto__ = User.prototype
// Developer.prototype = Object.create(User.prototype)
//
// Developer.prototype.sayHello = function () {
//     console.log(333333);
// }
//
// let x = new User('Dima', 22)
// let d = new Developer('MAx', 33)
//
// x.sayHello()
// d.sayHello()
//
// Array.prototype.evenLogger = function () {
//     this.forEach(el => {
//         if (el % 2 !== 0) {
//             return
//         }
//         console.log(el);
//     })
// }
//
// numbers.evenLogger()


function Hamster(name) {
    this.name = name;
    this.stomach = [];
}

// Hamster.prototype.stomach = [];

Hamster.prototype.findFood = function (eat) {
    this.stomach.push(eat)
}

const Lolya = new Hamster('Lolya');
const Zayza = new Hamster('Zazya');

Lolya.findFood('Yabko')
Lolya.findFood('Grushka')

console.log(Lolya.stomach, 'L');
console.log(Zayza.stomach, 'Z');


class Class {
    constructor(name) {
        this.name = name
    }

    sayHello() {

    }
}
