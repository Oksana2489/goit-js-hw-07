import { galleryItems } from './gallery-items.js';
// Change code below this line

function createMarkup(galleryItems) {
  return galleryItems
    .map((galleryItem) => {
      return `<div class="gallery__item">
                <a class="gallery__link" href="${galleryItem.original}">
                <img
                    class="gallery__image"
                    src="${galleryItem.preview}"
                    data-source="${galleryItem.original}"
                    alt="${galleryItem.description}"
                />
                    </a>
                    </div>`;
    })
    .join("");
}
function onImagesClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const modal = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`
  );
  modal.show();

  container.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      modal.close();
    }
  });
}

const container = document.querySelector(".gallery");
const imagesMarkup = createMarkup(galleryItems);
container.insertAdjacentHTML("beforeend", imagesMarkup);

container.addEventListener("click", onImagesClick);
