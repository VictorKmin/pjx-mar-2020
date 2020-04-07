const user = {
    name: 'Dima',
    age: 22,

    sayHello: function () {
        // let that = this;
        // const arr = () => {
        function arr() {
            console.log(this)
        };

        arr();

        document.write(`Hello my name is ${this.name}`)
    },
};

function arr() {
    console.log(this)
}

arr();

user.sayHello()

// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.wife = false;
//
//     this.greeting = function() {
//         document.write(`Hello my name is ${this.name}`)
//     }
// }
//
// // const dimas = new User('Dima',22);
// //
// // dimas.wife = 'Ira';
// //
// // console.log(dimas);
// //
// // dimas.greeting();
//
//
// // function House(isPrivate, roomCount, square) {
// //     this.isPrivate = isPrivate;
// //     this.roomCount = roomCount;
// //     this.square = square;
// //     this.progres = 0;
// //
// //     this.build = function () {
// //         if (this.progres >= 100) {
// //             document.write('HOUSE IS DONE');
// //             return;
// //         }
// //
// //         this.progres += 30;
// //     };
// //
// //     this.getInfo = function () {
// //         if (this.isPrivate) {
// //             document.write('My own house. I am so happy')
// //         } else {
// //             document.write('Another ugly house')
// //         }
// //     }
// // }
// //
// //
// // let x = new House(true, 2, 20);
// //
// // x.build();
// // console.log(x.progres);
// //
// // x.build();
// // console.log(x.progres);
// //
// // x.build();
// // console.log(x.progres);
// //
// // x.build();
// // console.log(x.progres);
// //
// // x.build();
// // console.log(x.progres);
// //
// //
// // const house = new House(false, 2, 55);
// //
// // house.build()
// // console.log(house.progres);
// //
// // house.build()
// // console.log(house.progres);
// //
// // house.build()
// // console.log(house.progres);
// //
// // house.build()
//
// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     greeting() {
//         document.write(`Hello my name is ${this.name}`)
//     }
// }
//
// class Developer extends User {
//     constructor(name, age, skills) {
//         super(name, age);
//         this.skills = skills;
//     }
//
//     codding(skill) {
//         if (skill === 'PHP') {
//             document.write(`I am not happy`)
//         } else {
//             document.write(`I am codding on ${skill}`)
//         }
//     }
// }
//
// class CTO extends Developer {
//     constructor(age, skills, english) {
//         super(age, skills);
//         this.name = '';
//         this.english = english;
//     }
// }
//
//
// let fantomas = new Developer('Fantimas', 25, ['JS', 'Java']);
// fantomas.codding('JS')
// document.write(`<br>`)
//
//
//
// let sahas = new CTO(30, ['JS', 'HP', 'C#'], 'Good');
//
// sahas.greeting()
// document.write(`<br>`)
// fantomas.greeting()
// document.write(`<br>`)
// fantomas.codding()
//
