let first_number = Number(prompt("Первое значение:"))
let operator = prompt("Действие:")
let second_number = Number(prompt("Второе значение:"))

if (operator === "-") {
    let res = first_number - second_number
    alert("Ваш ответ " + String(res))
} else if (operator === "+") {
    let res = first_number + second_number
    alert(`Ваш ответ ${res}`)
} else if (operator === "*") {
    let res = first_number * second_number
    alert (`Ваш ответ ${res}`)
} else if (operator === "/") {
    let res = first_number / second_number
    alert (`Ваш ответ ${res}`)
} else if (operator === "%") {
    let res = first_number % second_number
    alert (`Ваш ответ ${res}`)
} else if (operator === "**") {
    let res = first_number ** second_number
    alert (`Ваш ответ ${res}`) 
} else {
    alert("ERROR!")
}