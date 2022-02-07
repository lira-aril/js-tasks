document.addEventListener ("DOMContentLoaded", () => {

    const elem = document.querySelector("#sec")
    elem.innerText = 60

    setInterval (() => {
            let current = Number(elem.innerText);
            current--
            if (current < 0) {
                return 0
            }
            elem.innerText = current;   
            }, 1000)
})