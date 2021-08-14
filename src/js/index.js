import { preloadImages, preloadFonts } from './utils';
import LocomotiveScroll from 'locomotive-scroll';

const backtopEl = document.querySelector('.backtop');
const goAbout = document.querySelector('.about');
const headerEl = document.querySelector('#header');
const aboutEl = document.querySelector('#about');

// Preload  images and fonts
Promise.all([preloadImages('.tiles__line-img'), preloadFonts('rmd7deq')]).then(() => {
    // Remove loader (loading class)
    document.body.classList.remove('loading');

    // Initialize the Locomotive scroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });

    backtopEl.addEventListener('click', () => scroll.scrollTo(headerEl));
    goAbout.addEventListener('click', () => scroll.scrollTo(aboutEl));
});