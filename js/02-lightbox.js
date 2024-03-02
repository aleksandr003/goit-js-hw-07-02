import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const makeGallery = ({ preview, original, description } = {}) => {
  return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
};

const arrFromGalleryItems = galleryItems.map((elem) => {
  return makeGallery(elem);
});

galleryEl.insertAdjacentHTML("afterbegin", arrFromGalleryItems.join(""));

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
