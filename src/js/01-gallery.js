import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery');
const newGallery = onCreateNewItem(galleryItems);

gallery.insertAdjacentHTML('afterbegin', newGallery);
gallery.addEventListener('click', onOpenPic);

const largeImage = new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionDelay: 250,
});

function onCreateNewItem(galleryItems) {
  return galleryItems
    .map(
      ({ preview, description, original }) =>
        `<a class="gallery__item"   href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
       alt="${description}"      
    />
  </a>`
    )
    .join('');
}
function onOpenPic(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  largeImage.open(event.target);
}
