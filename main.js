function setTime() {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  const secondHand = document.querySelector(".second-hand");
  const minsHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  const hourDeg = (hour / 12) * 360 + (min / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

  const minDeg = (min / 60) * 360 + (sec / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minDeg}deg)`;

  const secDeg = (sec / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secDeg}deg)`;
  setInterval(setTime, 1000);
}

function showTime() {
  const date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let ampm = "AM";

  if (hour == 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour = hour - 12;
    ampm = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  const time = hour + ":" + min + ":" + sec + " " + ampm;
  document.getElementById("MyClockDisplay").textContent = time;
  setInterval(showTime, 1000);
}

setTime();
showTime();
