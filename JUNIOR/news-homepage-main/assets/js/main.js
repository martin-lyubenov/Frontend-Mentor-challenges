let image = document.getElementsByClassName('hero-img')[0]
let width = document.querySelector('html').clientWidth
if (width >= 700) {
    image.setAttribute('src','/assets/images/image-web-3-desktop.jpg')
} else { 
    image.setAttribute('src','/assets/images/image-web-3-mobile.jpg')
}

const navContainer = document.querySelector('.nav-container');
const mainNav = document.querySelector('.main-nav');
const navButton = document.querySelector(".mobile-menu-toggle");

navButton.addEventListener('click', () => { 
    let visibility = mainNav.getAttribute('data-visible')

    if (visibility === 'true') {
        mainNav.setAttribute('data-visible', false);
        navButton.setAttribute('data-toggle', true);
    } else { 
        mainNav.setAttribute('data-visible', true);
        navButton.setAttribute('data-toggle', false);
    }

    navContainer.toggleAttribute('data-overlay');

})