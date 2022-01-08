let myArr = [ 23, 72, 35, 62, 75, 25 ]
let num = Number(prompt())


//Решение №1

// while (num !== 0){
//     if(myArr.includes(num)) {
//         alert('Есть!')
//     } else {
//         alert('Нет')   
//     }
//     num = Number(prompt()) 
// }


//Решение №2

// while ( num !== 0) {

//     let found = false

//     for ( let i = 0; i < myArr.length; i++ ) {
//         if (num === myArr[i]) {
//             found = true
//         }
//     }
//     if (found) alert('Есть!')
//     else alert('Нет')

//     num = Number(prompt())
// }


//Решение №3

while ( num !== 0) {

    if (myArr.indexOf(num) >= 0) {
        alert('Есть')
    } else {
        alert('Нет')
    }

    num = Number(prompt())
}