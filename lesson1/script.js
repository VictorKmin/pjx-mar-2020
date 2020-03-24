// let name = 'Viktor';
// let age = 24;
// let wife = false; // false | true
//
// alert(name);
// console.log(name);
// console.log(age);
// console.log(wife);
//
// document.write(name);


// let userName = prompt('Як тебе звати');
// let userAge = prompt('How old r u?');
// let isMarried = confirm('Do u have a wife');
// document.write(userName);
// document.write('<hr>');
// document.write(userAge);
// document.write('<h2>');
// document.write(isMarried);
// document.write('</h2>');

// + - / * %
// document.write(12 % 5);
//
// console.log('Hello' * 2);
// document.write(typeof 22);
// document.write('<br>');
// document.write(9 + false);


// > < >= <= == !=

// if (20 > 5) {
//     document.write('Evrthg is fine');
// }

// let userAge = prompt('How old r u?');
//
// if (userAge >= 18) {
//     document.write('Welcome');
// } else {
//     document.write('Too young boy!');
// }


// if ('18' == 18) {
//     document.write('Zzzzzzzz....');
// }
// let str = 'Hello word mey name is Viktor';
// let str2 = "3.1415";
// let num = 3.1415;
// let num2 = 'two';
//
// // '1' + 1
//
// let myOwnVariable = 'Yurii';
//
// let isUserInBlackList = true;


// let userAge = prompt('Enter age');
let nick = prompt('Nick name pls');

// if (userAge >= 18) {
//     document.write('Weclome');
// } else {
//     if (nick === 'admin') {
//         document.write('Weclome');
//     } else {
//         document.write('Toooooo young');
//     }
// }

// || => АБО
// && => І
// if (userAge >= 18 && nick === 'admin') {
//     document.write('Weclome');
// } else {
//     document.write('Toooooo young');
// }

// if (userAge >= 18 && userAge < 60) {
//     document.write('Weclome');
// } else if (userAge >= 60) {
//     document.write('Eat backbit');
// } else if (userAge < 18) {
//     document.write('Мама насварить');
// } else {
//     document.write('ПОгане чило. Упс');
// }

console.time('xxx');
switch (nick) {
    case 'Viktor':
        document.write('То є я');
        break;
    case 'Kari':
        document.write('Hello darling');
        break;
    case 'Dasha':
        document.write('Првітулі');
        break;
    default:
        document.write('Smth went wrong');
}

console.timeEnd('xxx');

