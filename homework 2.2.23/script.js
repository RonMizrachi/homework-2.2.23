let timer = 0;
let watcher = false;
let timekeeper;

document.getElementById("startBtn").addEventListener("click", () => {
  if (watcher == false) {
    start();
  }
});
document.getElementById("stopBtn").addEventListener("click", () => {
  stop();
});

function start() {
  watcher = true;
  timekeeper = setTimeout(changeStopwatch, 1000);
}
function changeStopwatch() {
  timer++;
  document.getElementById("screen").innerText = timer;
  start();
}
function stop() {
  clearTimeout(timekeeper);
  watcher = false;
}

let usersId = [1, 2, 3, 4, 5, 6];
function callGoogleUsers(idInfo, kishkush, balabush) {
  if (usersId.includes(idInfo)) {
    kishkush(idInfo);
  } else {
    balabush();
  }
}
function success(idInfo) {
  console.log(
    "The information regarding user " + idInfo + " has been retreived."
  );
}
function failure() {
  console.log("There is no such user in the database.");
}

callGoogleUsers(4, success, failure);
