const clockContainer = document.querySelector(".status-bar__clock"),
  clockTitle = document.querySelector("span");

function nowTime() {
  const time = new Date(),
    hour = time.getHours(),
    minute = time.getMinutes();
  clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour}:${
    minute < 10 ? `0${minute}` : minute
  }`;
}

function init() {
  nowTime();
}

init();
