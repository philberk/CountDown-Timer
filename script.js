const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const summerDate = "21 Jun 2022";

function countdown() {
  const newSummerDate = new Date(summerDate);
  const currentDate = new Date();


  const totalSeconds = (newSummerDate - currentDate) / 1000;
  // divide by 1000 to turn milliseconds into seconds

  const days =  Math.floor(totalSeconds / 3600 / 24);
  // 60 secs in a min, 60 mins in an hour, / 3600, / 24
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? (`0${time}`) : time ;
}

// initial call
countdown();

setInterval(countdown,1000);
