function displayTheTime() {
  let dteTme = new Date();
  let time = dteTme.toLocaleTimeString();
  if (time.substring(0, 1) > 1) {
    time = time.replace(/^/, "0");
  }
  document.getElementById("p1").innerHTML = time.substring(0, 2);
  document.getElementById("p2").innerHTML = time.substring(2, 3);
  document.getElementById("p3").innerHTML = time.substring(3, 5);
  document.getElementById("p4").innerHTML = time.substring(5, 6);
  document.getElementById("p5").innerHTML = time.substring(6, 8);
}

let displayTime;

function startClock() {
  displayTime = setInterval(displayTheTime, 1000);
}

const stopClock = () => {
  clearInterval(displayTime);
};
