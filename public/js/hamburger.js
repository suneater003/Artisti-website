
// Hamburger Menu

const btn = document.querySelector('button.mobile-menu-btn');
const menu = document.querySelector('.mobile-menu')

// Adding event Listeners

btn.addEventListener('click', () => {
    menu.classList.toggle("hidden");
})
