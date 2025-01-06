// DropDown Navigation Menu Code
const mobileMenu = document.getElementById('mobile-menu');
const navUl = document.querySelector('nav ul');
const closeMenu = document.getElementById('close-menu');

mobileMenu.addEventListener('click', () => {
    navUl.classList.toggle('active'); // Toggle the active class
});

closeMenu.addEventListener('click', () => {
    navUl.classList.remove('active'); // Hide the menu when 'X' is clicked
});