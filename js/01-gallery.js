import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    galleryCollection: document.querySelector('.gallery'),
    body: document.body,
};


function makeGalleryItems (items) {
    return items 
    .map(({ preview, original, description }) => {
        return '<div class="gallery__item">
        <a class="gallery__link" href=`${original}`>
        <img loading="lazy" width="254" height="240" 
        class="gallery__image" 
        src=`${preview}`
        data-source=`${original}`
        alt`${description}`
        />
        </a>
        </div>';
    })
    .join('');
} 


