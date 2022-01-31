// вариант 1

// document.addEventListener("DOMContentLoaded", ()=> {

//     const light = document.querySelector("#bulb");

//     light.addEventListener("click", function(event){

//         event.target.classList.toggle("bulb-on");
//     })
// })

// вариант 2

document.addEventListener ("DOMContentLoaded", ()=> {
    let bulb = document.querySelector("#bulb");

    function turnOff() {
        bulb.src = "./img/lightoff.png";
      }
      
      function turnOn() {
        bulb.src = "./img/lighton.png";
      }
      document.getElementById('btn1').addEventListener('click', turnOff);
      document.getElementById('btn2').addEventListener('click', turnOn);
})