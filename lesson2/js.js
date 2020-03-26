// // // // let str = 'Hello world';
// // // // let num = 3.14;
// // // // let bol = true;
// // // // let nul = null;
// // // // let und = undefined;
// // // // let obj = {};
// // // // let s = Symbol();
// // // //
// // // // // let x;
// // // // // document.write(x);
// // // //
// // // // let arr = [22, true, 'Dima', 3.1423434];
// // // //
// // // // document.write(arr[2]);
// // // // document.write('<br>');
// // // //
// // // // let groups = [
// // // //     ['jscx'],
// // // //     ['pcx', 'jcx']
// // // // ];
// // // //
// // // // document.write(groups[1][0]);
// // // //
// //
// // let names = ['Viktor', 'Sasha', 'Sergyy', 'Ivan'];
// //
// // document.write(names);
// // document.write('<br>');
// //
// // // let userName = prompt('What is your name');
// // //
// // // // names.push(userName);
// // // // names.unshift(userName);
// // //
// // // let deletedName = names.pop();
// // // let deletedName = names.shift();
// // //
// // // document.write(deletedName);
// // // document.write('<br>');
// // //
// // // names[99] = 'TEST';
// // // names[2] = 'Sergii'
// // //
// // // document.write(names);
// // // console.log(names);
// // // document.write('<br>');
// //
// // document.write(names.length);
// // document.write('<br>');
// // document.write(names[names.length - 1]);
// // document.write('<br>');
//
//
// // let myName = prompt('EnterNmae');
// let user = {
//     name: 'Viktor',
//     age: 10,
//     car: false,
//     laptops: ['Dell', 'HP'],
//     girl: {
//         name: 'Kari',
//         age: 18
//     },
//     job: {
//         title: 'Middle Delevoper',
//         company: {
//             name: 'ELEKS',
//             founder: {
//                 age: 50,
//                 name: 'Oleksii'
//             }
//         }
//     }
// };
//
// user.xxx = 'Nema';
//
// // document.write(user.job.company.founder.name);
// document.write(user.name);
//
// delete user.age;
//
// console.log(user);
//


let names = ['Viktor', 'Sasha', 'Sergyy', 'Ivan'];

// document.write(names[0]);

for (let i = 0; i < names.length; i++) {
    document.write(names[i]);
    document.write('<br>')
}
