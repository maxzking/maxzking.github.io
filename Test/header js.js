// Navigation Bar / Dropdown menu
const mobileMenu = document.getElementById('mobile-menu');
const navUl = document.querySelector('nav ul');
const closeMenu = document.getElementById('close-menu');

mobileMenu.addEventListener('click', () => {
    navUl.classList.toggle('active'); // Toggle the active class
});

closeMenu.addEventListener('click', () => {
    navUl.classList.remove('active'); // Hide the menu when 'X' is clicked
});

const floorplan_menu = document.getElementById('mobile-menu');
const receive_room_1 = document.querySelector('receive-room-1');
const receive_room_2 = document.querySelector('receive-room-2');
const source_room = document.querySelector('source-room');
const grid = document.querySelector('grid')
const mini_map_title = document.querySelector('mini-map-title')

floorplan_menu.addEventListener('click', () => {
    receive_room_1.classList.toggle('active'); // Toggle the active class
    receive_room_2.classList.toggle('active');
    source_room.classList.toggle('active');
    floorplan_menu.classList.toggle('active');
    grid.classList.toggle('active');
    mini_map_title.classList.toggle('active');
});

receive_room_1.addEventListener('click', () => {
    receive_room_1.classList.remove('active'); // remove the active class
    receive_room_2.classList.remove('active');
    source_room.classList.remove('active');
    floorplan_menu.classList.remove('active');
    grid.classList.remove('active');
    mini_map_title.classList.remove('active');
});

receive_room_2.addEventListener('click', () => {
    receive_room_1.classList.remove('active'); // remove the active class
    receive_room_2.classList.remove('active');
    source_room.classList.remove('active');
    floorplan_menu.classList.remove('active');
    grid.classList.remove('active');
    mini_map_title.classList.remove('active');
});

source_room.addEventListener('click', () => {
    receive_room_1.classList.remove('active'); // remove the active class
    receive_room_2.classList.remove('active');
    source_room.classList.remove('active');
    floorplan_menu.classList.remove('active');
    grid.classList.remove('active');
    mini_map_title.classList.remove('active');
});