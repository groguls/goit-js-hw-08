// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEL = document.querySelector('.gallery');

galleryEL.innerHTML = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(galleryArr) {
  return galleryArr
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li>

  `
    )
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
