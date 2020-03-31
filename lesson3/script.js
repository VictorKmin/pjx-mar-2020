// let arr = [true, 22, 'GELLO', 11, false];
//
// let someValue = 'car';
//
// let user = {
//     name: 'Diana',
//     age: 46,
//     car: true,
//     son: {
//         name: 'Pavlo',
//         age: 22
//     }
// };
//
// console.log(user[someValue]); // user.car
// console.log(someValue); // user.car
// console.log('_____________________'); // user.car
//
// // for (let val of arr) {
// //     console.log(val);
// // }
// //
//
// for (let key in user) {
//     console.log(key); // car
//     console.log(user[key]); // user.car
//     console.log('*******************');
// }
// // for (let val of user) {
// //     console.log(val);
// // }
//
//
//


// // ref VS primitives
// let a = 10;
//
// let b = a; // 10
//
// b = 222;
//
// console.log(b);
// console.log(a);
//
// let user = {
//     name: 'Diana',
//     age: 46
// };
//
// let dyadko = user;
//
// dyadko.name = 'Святослав';
// dyadko.age = 77;
//
// console.log(dyadko);
// console.log(user);
//
// // // // JSON - JavaScript Object Notation
// let user = {
//     name: 'Diana',
//     age: 46,
//     man: undefined,
//     payment: NaN,
//     // THIS IS COMMENT !!
//     car: true,
//     son: {
//         name: 'Pavlo',
//         age: 22
//     }
// };
//
// let jsonUser = JSON.stringify(user);
//
// document.write(jsonUser.age);
// console.log(typeof jsonUser);
//
// let parsedUser = JSON.parse(jsonUser);
// parsedUser.son.age = 99;
// parsedUser.name = 'Vloldya';
// console.log(user);
// console.log('__________');
// console.log(parsedUser);


// DOM

let divka = document.getElementById('divka');
// console.log(divka);

// divka.style.backgroundColor = 'yellow';

let red = Math.random() * 255;
let green = Math.random() * 255;
let blue = Math.random() * 255;

divka.style.backgroundColor =
    `rgb(${red}, ${green}, ${blue})`;


let xxxElems = document.getElementsByClassName('xxx');

console.log(xxxElems);

for (let i = 0; i < xxxElems.length; i++) {
    xxxElems[i].innerText += ` PJCX-MAR-202${i}`
}


let divku = document.getElementsByTagName('div');

for (const divka of divku) {
    let htmlElement = document.createElement('b');
    htmlElement.style.color = 'gold';
    htmlElement.innerText = 'GOLD';
    divka.appendChild(htmlElement);

    divka.style.height = '100px'
}

let smallDivla = document.createElement('div');
smallDivla.style.width = '50px';
smallDivla.style.height = '50px';
smallDivla.style.backgroundColor = 'blue';

divka.appendChild(smallDivla);


let xxx = document.getElementsByClassName('xxx');

for (let i = 0; i < xxx.length; i++) {
    if (i % 2 !== 0) {
        xxx[i].classList.add('perfect')
    }
}

let students = [
    {name: 'a11', age: 23},
    {name: 'Taras', age: 25},
    {name: 'Volodya', age: 17},
    {name: 'Dasha', age: 16}
];


for (let studik of students) {
    let stidentDiv = document.createElement('div');
    stidentDiv.style.backgroundColor = 'silver';
    stidentDiv.style.marginBottom = '29px';

    stidentDiv.innerHTML =
        `Hello my name is ${studik.name} <br> And I am ${studik.age}`

    document.body.appendChild(stidentDiv);
}


let key = prompt('Що отримати з юзера??????????');

console.log(key);
let fantomas = {name: 'Fantomas', age: 23};
//
let users = [fantomas, {name: 'Dima', age: 99}];

console.log(fantomas[key]);



let userName = prompt('Enter name');

for (const user of users) {
    if (user.name === userName) {
        let key2 = prompt('Що отримати з юзера??????????');

        console.log(user[key2]);
    }
}
