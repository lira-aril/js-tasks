// Мое решение

let height = Number(prompt());
let left;
let right = '\\';


for (i = 1; i <= height; i++) {
    left = ' '
    for (k = i; k < height; k++) {
        left += ' '
    }
    left += '/'
    for (j = 0; j < i * 2 - 2; j++) {
        left += ' '
    }
    console.log(left + right)
}



// Решение в классе №1

// let n = Number(prompt())

// let part1 = ''
// let part2 = '/'
// let part3 = ''
// let part4 = '\\'

// for (let i = 0; i < n; i++) {
//     part1 = ''
//     for (j = 0; j < n - i; j++) {
//         part1 = part1 + ' '
//     }
//     part3 = ''
//     for (k = 0; k < i * 2; k++) {
//         part3 = part3 + ' '
//     }
//     console.log(part1 + part2 +part3 +part4)
// }


// Решение №2

// let n = Number(prompt())

// for (i = 0; i < n; i++) {
//     row = ''
//     for (j = 0; j < n - i; j++) {
//         row += ' '
//     }
//     row += '/'

//     for(k = 0; k < i * 2; k++) {
//         row += ' '
//     }
//     row += '\\'

//     console.log(row)
// }

