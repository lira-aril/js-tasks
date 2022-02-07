document.addEventListener ("DOMContentLoaded", () => {
   
    const input = document.querySelector("input")
    

    const btnStart = document.getElementById("btn_1")
    let interval = 0
    btnStart.addEventListener("click", ()=> {
        if (interval < 1) {
            interval = setInterval (countDown, 1000)
        } 
    })

    const btnPause = document.getElementById("btn_2")
    btnPause.addEventListener("click", () => {
    clearInterval(interval)
    interval = 0
    })

    const btnReset = document.getElementById("btn_3")
    btnReset.addEventListener("click", () => {
        clearInterval(interval)
        interval = 0
        const input = document.querySelector("input")
        input.value = input.innerText  
    })

    // input.value = localStorage.getItem("number");
})

function countDown () {
    const input = document.querySelector("input")
    let current = input.value.split(":")

        let seconds = Number(current[1])
        let minutes = Number(current[0])

        if (minutes === 00 && seconds === 00) {
            return 0
        }

        if (seconds === 00) {
            seconds = 59
            minutes-- 
        } else {
            seconds--
        }

        seconds = addZero(seconds)
        minutes = addZero(minutes)
        
        input.value = `${minutes}:${seconds}`
        // localStorage.setItem("number", input.value)
}

function addZero(num) {
    if (num < 10) {
        return `0${num}`
    } else {
        return String(num)
    }
}