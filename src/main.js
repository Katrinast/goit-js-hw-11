import { fetchImages } from "./js/pixabay-api.js";
import { renderImages } from "./js/render-functions.js";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';



let lightbox;
const refsEl = {
  searchForm: document.querySelector('.search-form'),
  inputForm: document.querySelector('.form-input'),
  searchBtn: document.querySelector('.form-button'),
  gallery: document.querySelector('.gallery'),
};

const { searchForm, inputForm, searchBtn, gallery } = refsEl;

fetchImages().then(imagesData => {
  gallery.innerHTML = renderImages(imagesData.hits);
})

searchForm.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(event) {
  event.preventDefault();
  const query = event.target.elements.search.value.trim();
  if (query === '') {
    
  }
  
}


