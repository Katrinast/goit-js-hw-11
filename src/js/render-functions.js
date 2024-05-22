import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const renderImages = (images) => {
  
return images.map(({ webformatURL, largeImageURL, tags, likes, views,comments, downloads}) => `<li class="gallery-item><a href="${largeImageURL}" class="gallery-link"><img class="gallery-img" src="${webformatURL}" alt="${tags}"/></a><div class="info"><p><b>Likes:</b> ${likes}</p>
        <p><b>Views:</b> ${views}</p>
        <p><b>Comments:</b> ${comments}</p>
        <p><b>Downloads:</b> ${downloads}</p></div></li>`).join('');
}
  
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

