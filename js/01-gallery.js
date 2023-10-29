import { galleryItems } from "./gallery-items.js";
// Change code below this line

function renderGallery(galleryItems) {
  const galleryElement = document.querySelector(".gallery");

  galleryItems.forEach((galleryItem) => {
    const galleryItemElement = createGalleryItem(galleryItem);
    galleryElement.appendChild(galleryItemElement);
  });
}

renderGallery(galleryItems);

function getLargeImageUrl(galleryItemElement) {
  return galleryItemElement.querySelector(".gallery__image").dataset.source;
}

function openModalWindow(galleryItemElement) {
  const modalWindow = basicLightbox.create(
    `<img src="${getLargeImageUrl(
      galleryItemElement
    )}" alt="Image description" />`
  );

  modalWindow.show();
}

document.querySelector(".gallery").addEventListener("click", (event) => {
  const targetElement = event.target;

  if (targetElement.classList.contains("gallery__image")) {
    openModalWindow(targetElement.closest(".gallery__item"));
  }
});

function replaceImageSrcInModalWindow(modalWindow, largeImageUrl) {
  const imageElement = modalWindow.element().querySelector("img");
  imageElement.src = largeImageUrl;
}

function openModalWindowAndReplaceImageSrc(galleryItemElement) {
  const modalWindow = basicLightbox.create(
    `<img src="${getLargeImageUrl(
      galleryItemElement
    )}" alt="Image description" />`
  );

  replaceImageSrcInModalWindow(
    modalWindow,
    getLargeImageUrl(galleryItemElement)
  );

  modalWindow.show();
}
