// Minimap functionality

// Update Toggle Switch Value
function updateToggleValue() {
    const toggle = document.getElementById('Masking');
    const label = toggle.nextElementSibling.nextElementSibling; // Get the label element

    // Update the label text and value based on the toggle state
    if (toggle.checked) {
        label.textContent = 'On'; // Change label to "On"
        toggle.value = 'On'; // Set value to "On"
    } else {
        label.textContent = 'Off'; // Change label to "Off"
        toggle.value = 'Off'; // Set value to "Off"
    }
}

// Updating MiniMap image based on user-selections
document.addEventListener('DOMContentLoaded', () => {
    const maskingToggle = document.getElementById('Masking');

    // Add event to the masking toggle
    maskingToggle.addEventListener('change', updateImages);
})

const maskingToggle = document.getElementById('Masking');

function updateImages() {
    const minimapImage = document.querySelector('.img-minimap');
    const room = minimapImage.getAttribute('data-value'); // Get the data-value from the image
    const masking = maskingToggle.checked ? 'ON' : 'OFF';

    // Update Minimap image
    minimapImage.src = getRoom1Image(room, masking);
}

function getRoom1Image(room, masking) {
    if (room === 'Source') {
        return `Photos/Minimap/${room}.png`;
    } else if (room === 'Receive1' || room === 'Receive2') {
        return `Photos/Minimap/${room}-${masking}.png`;
    }
}

// Select the necessary elements from the DOM
const floorplan_menu = document.getElementById('floorplan-menu');
const mini_map = document.querySelector('.mini-map'); // Select the mini-map element
const receive_room_1 = document.querySelector('.receive-room-1');
const receive_room_2 = document.querySelector('.receive-room-2');
const source_room = document.querySelector('.source-room');
const grid = document.querySelector('.grid');
const mini_map_title = document.querySelector('.mini-map-title');
const close_map = document.getElementById('close-map');

// Event listener for the floorplan menu icon
floorplan_menu.addEventListener('click', () => {
    // Toggle the active class for the rooms and other elements
    receive_room_1.classList.toggle('active'); // Toggle visibility of receive room 1
    receive_room_2.classList.toggle('active'); // Toggle visibility of receive room 2
    source_room.classList.toggle('active'); // Toggle visibility of source room
    floorplan_menu.classList.toggle('active'); // Toggle visibility of the floorplan menu icon
    grid.classList.toggle('active'); // Toggle visibility of the grid
    mini_map_title.classList.toggle('active'); // Toggle visibility of the mini-map title
    close_map.classList.toggle('active'); // Toggle visibility of the close button

    // Toggle the active class for the mini-map
    mini_map.classList.toggle('active'); // Add this line to toggle the mini-map's active state
});


// Function to change the label of the sound masking switch
function toggleLabel() {
    const checkbox = document.getElementById('Masking');
    const label = document.getElementById('switchLabel');
    
    if (checkbox.checked) {
        label.textContent = 'On'; // Change text to "On"
    } else {
        label.textContent = 'Off'; // Change text to "Off"
    }
}

function setRoomValue(value) {
    const img = document.querySelector('.img-minimap'); // Select the image
    img.setAttribute('data-value', value); // Update the data-value attribute
    toggleDoorOptions();
}

function regionOneFunction() {
    setRoomValue("Receive2"); // Change to the appropriate value for Region One
    updateImages();
    playAudio();
}

function regionTwoFunction() {
    setRoomValue("Source"); // Change to the appropriate value for Region Two
    updateImages();
    playAudio();
}

function regionThreeFunction() {
    setRoomValue("Receive1"); // Change to the appropriate value for Region Three
    updateImages();
    playAudio();
}

function getCoords(percentageCoords, imgWidth, imgHeight) {
    return percentageCoords.map((percentage, index) => {
        // For x-coordinates (0 and 2), use imgWidth; for y-coordinates (1 and 3), use imgHeight
        return index % 2 === 0 ? Math.round(percentage * imgWidth / 100) : Math.round(percentage * imgHeight / 100);
    });
}

function setupImageMap() {
    const img = document.querySelector('.img-minimap'); // Select the image using the class
    const imgWidth = img.clientWidth;
    const imgHeight = img.clientHeight;

    // Define regions in percentages
    const regions = [
        { coords: [0, 0, 100, 55], func: regionOneFunction }, // Region One
        { coords: [0, 55, 48, 100], func: regionTwoFunction }, // Region Two
        { coords: [48, 55, 100, 100], func: regionThreeFunction } // Region Three
    ];

    // Create area elements dynamically
    const map = document.querySelector('map[name="image-map"]'); // Select the map by name
    map.innerHTML = ''; // Clear existing areas if any
    regions.forEach(region => {
        const coords = getCoords(region.coords, imgWidth, imgHeight);
        const area = document.createElement('area');
        area.shape = 'rect';
        area.coords = coords.join(',');
        area.href = 'javascript:void(0);';
        area.alt = `Region ${regions.indexOf(region) + 1}`;
        area.onclick = region.func;
        map.appendChild(area);
    });
}

window.onload = setupImageMap; // Call setupImageMap when the window loads