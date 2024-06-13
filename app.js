let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let start = document.getElementById("start");
let reset = document.getElementById("reset");

let disp = document.getElementById("disp");
let interval = null;

start.addEventListener("click", () => {
  clearInterval(interval);
  let totalSeconds =
    Number(hour.value) * 3600 +
    Number(minute.value) * 60 +
    Number(second.value);

  if (
    totalSeconds <= 0 ||
    hour.value < 0 ||
    minute.value < 0 ||
    second.value < 0
  ) {
    alert("Please enter valid time values");
    return;
  }

  interval = setInterval(() => {
    totalSeconds--;
    if (totalSeconds >= 0) {
      let hr = Math.floor(totalSeconds / 3600);
      let mt = Math.floor(totalSeconds / 60 - hr * 60);
      let sc = totalSeconds - (hr * 3600 + mt * 60);

      hour.value = hr.toString().padStart(2, "0");
      minute.value = mt.toString().padStart(2, "0");
      second.value = sc.toString().padStart(2, "0");
    } else {
      clearInterval(interval);
      hour.value = "00";
      minute.value = "00";
      second.value = "00";
      disp.innerText = "Time over";
    }
  }, 1000);
});

reset.addEventListener("click", () => {
  clearInterval(interval);
  hour.value = "";
  minute.value = "";
  second.value = "";
  disp.innerText = "Timer";
});
