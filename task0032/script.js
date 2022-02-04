var arr = [1,2,3, [1,2,3,4, [2,3, [3,4, [1,2]]]]]; // здесь может быть любой массив
var resultArr = []

//вариант 1 рекурсивное решение

function flatten(array) {
    var flattend = [];
    (function flat(array) {
      array.forEach(function(el) {
        if (Array.isArray(el)) flat(el);
        else flattend.push(el);
      });
    })(array);
    return flattend;
}

console.log(flatten(arr))


// вариант 2 с использованием flat()

console.log(arr.flat(Infinity));

// вариант 3 использование рекурсию, reduce, concat

function flatDeep(arr, d = 1) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                 : arr.slice();
 };
 
 console.log(flatDeep(arr, Infinity));

// вариант 4.Не рекурсивное упрощение с использованием стэка

function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // забираем последнее значение
    const next = stack.pop();
    if (Array.isArray(next)) {
      // добавляем к массиву элементы не модифицируя исходное значение
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  //разворачиваем массив, чтобы восстановить порядок элементов
  return res.reverse();
}

console.log(flatten(arr));

//вариант 5 рекурсивное решение

const filterArr = (param) => {

    let newArr = [];

    param.filter((elem) => (Array.isArray(elem) ? newArr = [...newArr, ...filterArr(elem)] : newArr.push(elem)))

    return newArr;
}

console.log(filterArr(arr));

// вариант 6 решение в классе

function convert(myArr, resultArr) {
  for (let i = 0; i < myArr.length; i++) {
    if (Array.isArray(myArr[i])) {
      convert(myArr[i], resultArr)
    } else {
      resultArr.push(myArr[i])
    }
  }
  return resultArr
}

console.log(convert(arr, resultArr))



