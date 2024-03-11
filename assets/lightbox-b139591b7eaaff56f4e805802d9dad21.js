import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.min.js';
import PhotoSwipe from 'photoswipe/dist/photoswipe.esm.min.js';
import 'photoswipe/dist/photoswipe.min.css';

const lightbox = new PhotoSwipeLightbox({
    gallery: '#gallery--responsive-images',
    children: 'a',
    pswpModule: PhotoSwipe
});
lightbox.init();