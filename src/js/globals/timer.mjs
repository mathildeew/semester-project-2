/**
 * Calculates the time from start time to end time
 * @param {*} ends End time
 * @returns String with the calculated time in days, hours, minutes and seconds
 * ```
 * // Countdown until auction ends
 * const today = new Date();
 * const ends = auction.endsAt;
 * const timer = calcEndTime(today, ends);
 * ```
 */
export function calcEndTime(ends) {
  let difference = new Date(ends).getTime() - new Date().getTime();
  let seconds = Math.floor(difference / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  hours %= 24;
  minutes %= 60;
  seconds %= 60;

  // console.log(`${days}h, ${hours}h, ${minutes}m, ${seconds}s`);
  let timer;

  if (difference < 0) {
    timer = `Ended`;
  }
  if (days > 0) {
    timer = `${days} days`;
  }
  if (hours > 0 && days === 0) {
    timer = ` ${hours} hours`;
  }
  if (hours === 0 && days === 0) {
    timer = `${minutes}m, ${seconds}s`;
  }
  if (hours === 0 && days === 0 && minutes === 0) {
    timer = `${seconds}s`;
  }
  return timer;
}
