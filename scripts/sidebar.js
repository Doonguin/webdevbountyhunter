// Variables
const hamburger = document.getElementById('hamburger');
const main = document.querySelector('main');

// Make sure the hamburger menyu opens the sidebar menu
hamburger.addEventListener('click', () => {
    main.classList.toggle('open');
});