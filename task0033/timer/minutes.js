document.addEventListener ("DOMContentLoaded", () => {
   
    const element = document.querySelector("#min")
    let intervalID = 0

    if (localStorage.getItem("time")) {
        element.innerText = localStorage.getItem("time")
    } else {
        element.innerText = "25:00"
    }

    const startButton = document.getElementById("start")
    
    startButton.addEventListener("click", ()=> {
        if (intervalID < 1) {
            intervalID = setInterval (myTimer, 1000)
        }   
    })

    const pauseButton = document.getElementById("pause")
    pauseButton.addEventListener("click", () => {
    clearInterval(intervalID)
    intervalID = 0
    })

    const resetButton = document.getElementById("reset")
    resetButton.addEventListener("click", () => {
        clearInterval(intervalID)
        intervalID = 0
        const elem = document.querySelector("#min")
        element.innerText = "25:00"
    })

})

function myTimer () {
    const element = document.querySelector("#min")
    let current = element.innerText.split(":")
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

        seconds = convertTime(seconds)
        minutes = convertTime(minutes)
        
        localStorage.setItem("time", element.innerText)
        element.innerText = `${minutes}:${seconds}`;
        
}

function convertTime(num) {
    if (num < 10) {
        return `0${num}`
    } else {
        return String(num)
    }
}