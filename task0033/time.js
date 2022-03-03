document.addEventListener ("DOMContentLoaded", () => {
  function clock(){
    let date = new Date();
    let hours = date.getHours();
    if (date.getHours() < 10) {
      '0' + date.getHours()
    } else date.getHours();
    let minutes = date.getMinutes()
    if (date.getMinutes() < 10) {
      '0' + date.getMinutes()
     } else date.getMinutes();
    let seconds = date.getSeconds();
    if (date.getSeconds() < 10) {
      '0' + date.getSeconds()
     } else date.getSeconds();

    document.getElementById('current_time').innerHTML = hours + ':' + minutes + ':' + seconds;
  }
  setInterval(clock, 1000);
  clock();

  const countDownDate = new Date("Feb 19, 2022 06:30:00").getTime();
  let x = setInterval(function() {
  // Сегодняшняя дата
  let now = new Date().getTime();
  // Интервал времени между двумя датами 
  let distance = countDownDate - now;
  // Считаем время часы, минута, секунда
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Выводим результат
  document.getElementById("timer").innerHTML = hours + "ч "+ minutes + "м " + seconds + "с ";
  // По истечению времени выводится текст 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Проснись!";
  }
}, 1000);
})