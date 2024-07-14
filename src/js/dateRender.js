const refs = {
  time: document.querySelector('.time'),
};

function getTime() {
  const currentDate = new Date();
  const days = currentDate.getDate().toString().padStart(2, '0');
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const seconds = currentDate.getSeconds().toString().padStart(2, '0');

  return `${days} ${month} ${year}, ${hours}:${minutes}:${seconds}`;
}

function updateTime() {
  refs.time.textContent = getTime();
}

setInterval(updateTime, 1000);
updateTime();

export default Date;
