document.addEventListener("DOMContentLoaded", start)

function start() {
    const btn = document.querySelector("button")
    btn.addEventListener("click", sum)
}

function sum () {
    let inpOne = document.getElementById("one")
    let inpTwo = document.getElementById("two")
    let sum = document.querySelector("div")
    sum.innerText = Number(inpOne.value) + Number(inpTwo.value)
}
