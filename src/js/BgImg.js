import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getBgImg(q) {
  try {
    const response = await axios.get('', {
      params: {
        key: '44946850-4c776fe0ffa968f959f660738',
        q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Fetch error: ', error);
    throw error;
  }
}

export function getTimeOfDay() {
  const now = new Date();
  const hours = now.getHours();
  if (hours >= 6 && hours < 10) {
    return 'morning';
  } else if (hours >= 10 && hours < 16) {
    return 'work';
  } else if (hours >= 16 && hours < 19) {
    return 'evening';
  } else {
    return 'night';
  }
}

export function updateBackground() {
  const timeOfDay = getTimeOfDay();
  getBgImg(timeOfDay)
    .then(data => {
      if (data.hits.length > 0) {
        const randomImg =
          data.hits[Math.floor(Math.random() * data.hits.length)].webformatURL;
        document.body.style.backgroundImage = `url(${randomImg})`;
      } else {
        console.log('No images found for this query');
      }
    })
    .catch(error => {
      console.error('Error fetching background image:', error);
    });
}

updateBackground();

setInterval(updateBackground, 3600000);
