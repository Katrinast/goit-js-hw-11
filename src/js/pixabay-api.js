const API_KEY = '44009462-82273816cd5912ea13bf70156';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = query => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true'
  })
  return fetch(`${BASE_URL}?${searchParams.toString()}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    
      return response.json();
    });
    
}