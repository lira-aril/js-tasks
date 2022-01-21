function myMax (arr) {
    let maxNum = arr[0]

    for ( i = 0; i < arr.length; i++) {
        if (maxNum < arr[i]) {
            maxNum = arr[i]
        }
    }
    return maxNum
}

console.log(myMax([ 5, 7, 10, 27, 54, 96]))
console.log(myMax([ 0, -12, 45, 69, -6, 74]))
console.log(myMax([ -7, -19, -40 ]))
