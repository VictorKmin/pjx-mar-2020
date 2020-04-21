// // console.log(1);
// //
// // setTimeout(() => {
// //     console.log(2);
// // }, 0)
// //
// // console.log(3);
//
//
//
// document.getElementById('btn')
//     .onclick = () => {
//     console.log("CLICK");
// }
//
console.time('WHILE')
let i = 0;
while (i < 999999999) {
    i++
}

i = 0
while (i < 999999999) {
    console.log(i);
    setTimeout(() => {
    }, 200)
    i++
}

console.timeEnd('WHILE')

// let money = 0;
//
// function clearHouse(isJobDone) {
//     setTimeout(() => {
//         if (isJobDone) {
//             console.log('DONE');
//             money = 500;
//             console.log(money);
//         } else {
//             console.log(money);
//             console.log('WRONG');
//         }
//     }, 2000)
// }
//
//
// function buyJeans(money) {
//     setTimeout(() => {
//         if (money > 200) {
//             money -= 200;
//             console.log(money);
//             console.log('Cool jeane, bro')
//         } else {
//             console.log(money);
//             console.log('Знов нема грошей на шмот (((')
//         }
//     }, 3000)
// }
//
//
// clearHouse(true);
//
// buyJeans(money);
//
// console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$');
// console.log(money);
// console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$');


// let money = 0;
//
// function clearHouse(isJobDone, cb) {
//     setTimeout(() => {
//         if (isJobDone) {
//             console.log('DONE');
//             money = 500;
//             cb(null, money)
//         } else {
//             console.log(money);
//             cb('WRONG')
//         }
//     }, 2000)
// }
//
// function buyJeans(money, cb) {
//     setTimeout(() => {
//         if (money > 200) {
//             money -= 200;
//             console.log(money);
//             console.log('Cool jeane, bro')
//
//             cb(null, money)
//         } else {
//             console.log(money);
//             console.log('Знов нема грошей на шмот (((')
//
//             cb('No money no honey')
//         }
//     }, 3000)
// }
//
// function goEat(money ,cb) {
//     if (money > 50) {
//         money -= 50;
//         console.log('om nom nom');
//
//         cb(null, money)
//     } else {
//         console.log('Нема грошей');
//         cb('errrr')
//     }
// }
//
//
// clearHouse(true, (err, reward) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(reward);
//
//         buyJeans(reward, (err, change) => {
//             if (err) {
//                 console.error(err);
//             } else {
//                 console.log(change);
//
//                 goEat(change, (err, data) => {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         console.log(data);
//                     }
//                 })
//             }
//         })
//     }
// })


// let money = 0;
//
// function clearHouse(isJobDone) {
//     return new Promise((resolve, reject) => {
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
// clearHouse(true)
//     .then((reward) => {
// //         console.log(reward);
// //
// //         return buyJeans(reward)
//     })
//     .then(change => {
//         console.log(change);
//
//         return goEat(change)
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(reason => {
//         console.log('**************************')
//         console.log(reason)
//         console.log('**************************')
//     })
//     .finally(() => {
//         console.log('FINALY');
//     })


let one = new Promise(resolve => {
    setTimeout(() => {
        resolve(1);
    }, 2000)
});

let two = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 2000)
});

let three = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3);
    }, 5000)
});


// Promise.all([one, two.catch(reason => {}), three])
//     .then(value => {
//         console.log('!!!! THEN !!!!');
//         console.log(value);
//         console.log('!!!! THEN !!!!');
//     })
//     .catch(reason => {
//         console.log(reason);
// })


Promise.race([one, two, three])
    .then(value => {
        console.log(value);
    })
    .catch(reason => {
        console.log(reason);
    })
