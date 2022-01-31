document.addEventListener("DOMContentLoaded", start)

function start() {
    const btn = document.querySelector("button")
    btn.addEventListener("click", sum)
}

function sum () {
    const inpOne = document.getElementById("one")
    const inpTwo = document.getElementById("two")
    const sum = document.querySelector("div")
    sum.textContent = Number(inpOne.value) + Number(inpTwo.value)
}
