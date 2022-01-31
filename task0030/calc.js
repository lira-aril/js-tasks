document.addEventListener("DOMContentLoaded", ()=> {

    let calcScreen = document.querySelector("input")
    
    document.getElementById("num_1").addEventListener("click", ()=> {
        calcScreen.value += "1"
    })

    document.getElementById("num_2").addEventListener("click", ()=> {
        calcScreen.value += "2"
    })

    document.getElementById("num_3").addEventListener("click", ()=> {
        calcScreen.value += "3"
    })

    document.getElementById("num_4").addEventListener("click", ()=> {
        calcScreen.value += "4"
    })

    document.getElementById("num_5").addEventListener("click", ()=> {
        calcScreen.value += "5"
    })

    document.getElementById("num_6").addEventListener("click", ()=> {
        calcScreen.value += "6"
    })

    document.getElementById("num_7").addEventListener("click", ()=> {
        calcScreen.value += "7"
    })

    document.getElementById("num_8").addEventListener("click", ()=> {
        calcScreen.value += "8"
    })

    document.getElementById("num_9").addEventListener("click", ()=> {
        calcScreen.value += "9"
    })

    document.getElementById("zero").addEventListener("click", ()=> {
        calcScreen.value += "0"
    })

    document.getElementById("plus").addEventListener("click", ()=> {
        calcScreen.value += "+"
    })

    document.getElementById("minus").addEventListener("click", ()=> {
        calcScreen.value += "-"
    })

    document.getElementById("mult").addEventListener("click", ()=> {
        calcScreen.value += "*"
    })

    document.getElementById("division").addEventListener("click", ()=> {
        calcScreen.value += "/"
    })

    document.getElementById("power").addEventListener("click", ()=> {
        calcScreen.value += "n"
    })

    document.getElementById("root").addEventListener("click", ()=> {
        calcScreen.value += "√"
    })

    document.getElementById("clear").addEventListener("click", ()=> {
        calcScreen.value = ""
    })

    document.getElementById("equal").addEventListener('click', calculate)
 
    function calculate () {
        let sign = 0
        let text = document.querySelector("input").value
        if (text[0] === "√") {
            const rootNum = Number(text.slice(1, text.length));
            let result = Math.sqrt(rootNum);
            document.querySelector("input").value = result

        } else {
        for ( let i = 0; i < text.length; i++ ) {
            if ("+-/*n/".includes(text[i])){
                sign = i
            }
        }
        const firstNum = Number(text.slice(0, sign))
        const secondNum = Number(text.slice(sign+1, text.length))
        let result = 0
        if (text[sign] == "+") result = firstNum + secondNum
        else if (text[sign] == "-") result = firstNum - secondNum
        else if (text[sign] == "*") result = firstNum * secondNum
        else if (text[sign] == "/") result = firstNum / secondNum
        else if (text[sign] == "n") result = firstNum ** secondNum
        
        document.querySelector("input").value = result
    }
    }

})