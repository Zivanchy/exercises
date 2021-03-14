const buttonStart = document.querySelector(".btn-start");
const buttonStop = document.querySelector(".btn-stop");
const buttonReset = document.querySelector(".btn-reset");
const timer = document.querySelector(".timer");
let seconds = 0;
let miliseconds = 0;
let interval;

buttonStart.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

buttonStop.addEventListener("click", () => {
  clearInterval(interval);
});

buttonReset.addEventListener("click", resetDisplay);

function startTimer() {
  miliseconds++;

  if (miliseconds > 99) {
    miliseconds = 0;
    seconds++;
  }

  updateDisplay(seconds, miliseconds);
}

function updateDisplay(seconds, miliseconds) {
  seconds = seconds < 10 ? "0" + seconds : seconds;
  miliseconds = miliseconds < 10 ? "0" + miliseconds : miliseconds;
  return (timer.innerText = seconds + ":" + miliseconds);
}

function resetDisplay() {
  seconds = 0;
  miliseconds = 0;
  clearInterval(interval);
  timer.innerText = "00:00";
}
