export function formatTime(time) {
  const minutes = padTime(Math.floor(time / 60)),
    seconds = padTime(time % 60);

  return `${minutes} : ${seconds}`;
}

export function padTime(time) {
  time = time < 10 ? "0" + time : time;
  return time;
}

export function calcTimeDifference(startTime, endTime) {
  return Math.round(endTime - startTime);
}

export function getUnixTimestamp() {
  return Math.floor(Date.now() / 1000);
}
