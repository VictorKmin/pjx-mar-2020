// let money = 0;
//
// function clearHouse(isJobDone) {
//     // throw new Error('ZZZZZZZZZz')
//     return new Promise((resolve, reject) => {
//
//         setTimeout(() => {
//             if (isJobDone) {
//                 console.log('DONE');
//                 money = 500;
//                 resolve(money)
//             } else {
//                 console.log(money);
//                 reject('WRONG')
//             }
//         }, 2000)
//     })
// }
//
// function buyJeans(money) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (money > 200) {
//                 money -= 200;
//                 console.log('Cool jeane, bro')
//
//                 resolve(money)
//             } else {
//                 console.log(money);
//                 console.log('Знов нема грошей на шмот (((')
//
//                 reject('No money no honey')
//             }
//         }, 3000)
//     })
// }
//
// function goEat(money) {
//     return new Promise((resolve, reject) => {
//         if (money > 50) {
//             money -= 50;
//             console.log('om nom nom');
//
//             resolve(money)
//         } else {
//             console.log('Нема грошей');
//             reject('errrr')
//         }
//     })
// }
//
//
// // async function myFunc() {
// //     let reward;
// //
// //     try {
// //         reward = await clearHouse(true);
// //     } catch (err) {
// //         console.log('!!!!!!!!!!!!!!!!!!!111');
// //         console.log(err);
// //         console.log('!!!!!!!!!!!!!!!!!!!111');
// //     }
// //
// //     try {
// //         reward = await buyJeans(0);
// //     } catch (e) {
// //
// //     }
// //
// //     try {
// //         await goEat(reward)
// //     } catch (e) {
// //
// //     }
// //
// //
// //     console.log(22);
// // }
// //
// // myFunc()
//
//
// async function myFunc() {
//
//     try {
//         let reward = await clearHouse(true);
//         reward = await buyJeans(reward);
//         await goEat(reward)
//     } catch (err) {
//         console.log('!!!!!!!!!!!!!!!!!!!111');
//         console.log(err);
//         console.log('!!!!!!!!!!!!!!!!!!!111');
//     }
//
//     console.log(22);
// }
//
// myFunc()

// fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
//     .then(resp => {
//         return resp.json()
//     })
//     .then(kusr => {
//         kusr.forEach(({ccy, base_ccy, sale}) => {
//             document.write(`${ccy} - ${base_ccy}: ${sale}`)
//             document.write(`<br>`)
//         })
//     })

// let viktor = {
//     name: 'Viktor',
//     age: 24,
//     position: 'midlde',
//     payment: 1000
// }
//
// let dimas = {
//     name: 'Dimas',
//     age: 27,
//     position: 'lead',
//     payment: 2000,
// }
//
// let olga = {
//     name: 'Olga',
//     age: 26,
//     position: 'jun',
//     payment: 3000
// }
//
// // function sayHello() {
// //     console.log(this.name + ' say hello to u')
// //     console.log(this)
// // }
// //
// // sayHello.call(dimas)
// // sayHello.apply(viktor)
// //
// // let sayHello1 = sayHello.bind(olga);
// // console.log(sayHello1);
// // sayHello1()
//
// function changePayment(raiseMoney, newPosition) {
//     this.payment += raiseMoney
//     this.position = newPosition
// }
//
// changePayment.call(dimas, -500, 'Senior')
// changePayment.apply(olga, [1000, 'Midlde'])
//
// let xxx = changePayment.bind(viktor, 100, 'Middle');
//
// console.log(dimas);
// console.log(olga);
//
// xxx()
// console.log(viktor);
// xxx()
// console.log(viktor);
// xxx()
// console.log(viktor);
//



//
// function closure() {
//     let name = 'Viktor';
//     let age = 24;
//
//     function getAge() {
//         return age;
//     }
//
//     function getName() {
//         return name;
//     }
//
//     function setAge(newAge) {
//         if (newAge > age) {
//             age = newAge
//         }
//     }
//
//     return {
//         getAge,
//         getName,
//         setAge,
//     }
// }
//
// let userXXX = closure();
//
// console.log(userXXX.getAge());
// userXXX.setAge(9);
// console.log(userXXX.getAge());
//
// let userXXX2 = closure();
// console.log(userXXX2.getAge());
//
//
// // console.log(closure().getAge());
// //
// // closure().setAge(29)
// //
// // console.log(closure().getAge());



function counter() {
    let x = 0;

    return function() {
        x++;
        console.log(x);
    }
}

let z = counter();
z()

console.log(z.toString());
z()
z()
z()
z()
z()

// counter().plus();
// counter().plus();
// counter().plus();
// counter().plus();
// counter().plus();
