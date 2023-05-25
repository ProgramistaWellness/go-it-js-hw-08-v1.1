import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
// Change code below this line
import { galleryItems } from './gallery-items.js';
const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    (image) =>
      `<li>
      <a class="gallery__item" href="${image.original}">
        <img
          class="gallery__image"
          src="${image.preview}"
          alt="${image.description}"
        />
      </a>
    </li>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", markup);
console.log(galleryItems);
const lightbox = new SimpleLightbox('.gallery a', 
{ captionData: "alt",
  captionsPosition: "outside",
  captionDelay: 250,
});
console.log(galleryItems);
