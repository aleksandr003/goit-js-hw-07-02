import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
galleryItems.map((elem) => {
  const li = document.createElement("li");
  li.classList.add("gallery__item");
  const link = document.createElement("a");
  link.classList.add("gallery__link");
  li.append(link);
  const imgEl = document.createElement("img");
  imgEl.classList.add("gallery__image");
  imgEl.setAttribute("src", elem.preview);
  imgEl.setAttribute("alt", elem.description);
  imgEl.setAttribute("data-source", elem.original);
  link.append(imgEl);
  galleryEl.append(li);
});

galleryEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const bannerUrl = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${bannerUrl}" width="800" height="600">
`);

  instance.show();
});

// import * as basicLightbox from "basiclightbox";

// const onGalleryImgClick = (event) => {
//   event.preventDefault();
//   let instance;
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }

//   const bannerUrl = event.target.dataset.source;

//   instance = basicLightbox.create(
//     `<img src="${bannerUrl}" width="800" height="600">`
//   );

//   instance.show();
// };

// galleryEl.addEventListener("click", onGalleryImgClick);
//======
