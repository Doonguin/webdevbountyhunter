// Variables
const hamburger = document.querySelector('#hamburger');
const main = document.querySelector('main');

const icons = hamburger.querySelectorAll('i');

// Make sure the hamburger menyu opens the sidebar menu
hamburger.addEventListener('click', () => {
    main.classList.toggle('open');

    if (main.classList.contains('open')) {
        icons[0].style.opacity = 0;
        icons[1].style.opacity = 1;
    } else {
        icons[0].style.opacity = 1;
        icons[1].style.opacity = 0;
    }
});