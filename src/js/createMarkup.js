import galleryItems from '../db/array';
import myRefs from './refs';
import templateByElem from '../templates/myItem.handlebars';
const { galleryRef, lightboxRef, overlayRef, imageRef, closeButtonRef } = myRefs;

const galleryList = templateByElem(galleryItems)
galleryRef.insertAdjacentHTML('beforeend', galleryList);