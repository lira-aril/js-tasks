//Задача №1

// function checkAge(age) {
//     if (age > 18) {
//         return true
//     }

//     return confirm ("Родители разрешили?") 
// }

// let age = Number(prompt("Сколько вам лет?"))

// if (checkAge(age)) {
//     alert("Доступ получен")
// } else alert("Доступ закрыт") 


//Задача №2

//используя оператор ?

// function checkAge(age) {
//    return (age > 18) ? true : alert("Родители разрешили?") 
// }

//используя оператор ||

// function checkAge(age) {
//     return (age > 18) || confirm ("Родители разрешили?")
// }

// Задача №3

// let a = Number(prompt("Введите первое число:"))
// let b = Number(prompt("Введите второе число:"))

// function min (a, b) {
//     if (a < b) {
//         return a
//     } else if (a > b) {
//         return b
//     } else {
//         return (` Числа равны `)
//     }
// }

// alert(min (a, b))

// Задача №4

// let x = Number(prompt("Введите число:"))
// let n = Number(prompt("Введите степень:"))

// function pow (x, n) {
//     return x ** n
// }

// alert(pow(x, n))

// Задача №5 

// function ask (question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
//  ask (
//     "Вы согласны?",
//     function () { alert("Вы согласились."); } ,
//     function () { alert("Вы отменили выполнение."); }
//  );

// используя функции-стрелки перепишите код

// function ask (question, yes, no) {
//     confirm(question) ? yes() : no()
// }

// ask (
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
// );














