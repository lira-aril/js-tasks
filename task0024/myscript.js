let hight = Number(prompt());
let left;
let right = '\\';


for (i = 1; i <= hight; i++) {
    left = ' '
    for (k = i; k < hight; k++) {
        left += ' '
    }
    left += '/'
    for (j = 0; j < (i*2)-2; j++) {
        left+=' '
    }
    console.log(left + right)
}