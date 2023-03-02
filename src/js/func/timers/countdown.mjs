function countdown(ends) {
  let difference = Date.parse(ends) - Date.parse(new Date());
  let seconds = Math.floor((difference / 1000) % 60);
  let minutes = Math.floor((difference / 1000 / 60) % 60);
  let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));

  return {
    difference,
    days,
    hours,
    minutes,
    seconds,
  };
}

export function initializeCountdown(id, ends) {
  function updateCountdown() {
    let difference = countdown(ends);

    id.innerText = `${difference.days}d, ${difference.hours}h, ${difference.minutes}m, ${difference.seconds}s`;

    if (difference.total <= 0) {
      clearInterval(timeinterval);
      id.innerText = `Ended`;
    }
  }
  updateCountdown();
  const timeinterval = setInterval(updateCountdown, 1000);
}
