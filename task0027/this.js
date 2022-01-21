// Задача №1

// let user = {
//     name: "John",
//     go: function() {
//         alert(this.name)
//     }
// };

// (user.go)()

// Задача №2

// let obj, method;

// obj = {
//     go: function () { alert(this); }
// };

// obj.go();

// (obj.go)();

// (method = obj.go)();

// (obj.go || obj.stop)();

// Задача №3

// function makeUser () {
//     return {
//         name: "John",
//         ref () {
//             return this;
//         }
//     };
// };

// let user = makeUser();

// alert( user.ref().name )

// Задача №4

// let calculator = {
//     read: function (a, b) {
//         this.a = Number(prompt("Введите число a:"));
//         this.b = Number(prompt("Введите число b:"))   
//     },
//     sum: function (a, b) {
//         return this.a + this.b
//     },
//     mul: function (a, b) {
//         return this.a * this.b
//     }
// };

// calculator.read();
// alert( calculator.sum());
// alert( calculator.mul());

// Задача №5

let ladder = {
    step: 0,
    up() {
        this.step ++;
        return this;
    },
    down() {
        this.step --;
        return this;
    },
    showStep() {
        alert(this.step);
        return this
    }
}

ladder
   .up()
   .up()
   .down()
   .up()
   .up()
   .down()
   .showStep();










