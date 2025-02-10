// Minimap functionality
// Add event listeners to the switches
document.querySelectorAll('input[name="Volume"], input[name="Wall"], input[name="Room"], input[name="Door"], #Masking').forEach(switchElement => {
    switchElement.addEventListener('change', handleSwitchChange);
});

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
    const wallRadios = document.querySelectorAll('input[name="Wall"]');
    const doorRadios = document.querySelectorAll('input[name="Door"]');
    const roomRadios = document.querySelectorAll('input[name="Room"]');

    // Add event listeners to all relevant inputs
    maskingToggle.addEventListener('change', updateImages);
    wallRadios.forEach(radio => radio.addEventListener('change', updateImages));
    doorRadios.forEach(radio => radio.addEventListener('change', updateImages));
    roomRadios.forEach(radio => radio.addEventListener('change', updateImages));

    function updateImages() {
        const selectedRoom1 = document.querySelector('input[name="Room"][value="receive-room-1"]').checked;
        const selectedRoom2 = document.querySelector('input[name="Room"][value="receive-room-2"]').checked;
        const selectedSourceRoom = document.querySelector('input[name="Room"][value="source-room"]').checked;
        const Room = document.querySelector('input[name="Room"]:checked').value;
        const wall = document.querySelector('input[name="Wall"]:checked').value;
        const door = document.querySelector('input[name="Door"]:checked').value;
        const masking = maskingToggle.checked ? 'ON' : 'OFF';

        // Update Room 1 Image
        const room1Image = document.querySelector('.img-receive-room-1');
        room1Image.src = getRoom1Image(selectedRoom1, wall, door, masking);

        // Update Room 2 Image
        const room2Image = document.querySelector('.img-receive-room-2');
        room2Image.src = getRoom2Image(selectedRoom2, door, masking);

        // Update Source Room Image
        const sourceImage = document.querySelector('.img-source-room');
        sourceImage.src = getSourceImage(selectedSourceRoom, wall, door);

        // Update Background Image
        var listening_path = document.querySelector('.listening_path');
        listening_path.src = getListeningImage(Room, wall, door, masking);
    }
    

    function getRoom1Image(room, wall, door, masking) {
        if (room === true && door === 'SW+') {
            return `Photos/Minimap/S${wall}SW-${masking}-1.png`;
        } else if (room === true) {
            return `Photos/Minimap/S${wall}${door}-${masking}-1.png`;
        } else if (room === false && door === 'SW+') {
            return `Photos/Minimap/U${wall}SW-${masking}-1.png`;
        } else if (room === false) {
            return `Photos/Minimap/U${wall}${door}-${masking}-1.png`;
        } 
    }

    function getRoom2Image(room, door, masking) {
        if (room === true && door === 'SW+') {
            return `Photos/Minimap/SASW-${masking}-2.png`;
        } else if (room === true) {
            return `Photos/Minimap/SA${door}-${masking}-2.png`;
        } else if (room === false && door === 'SW+') {
            return `Photos/Minimap/UASW-${masking}-2.png`;
        } else if (room === false) {
            return `Photos/Minimap/UA${door}-${masking}-2.png`;
        }
    }

    function getSourceImage(room, wall, door) {
        if (room === true && door === 'SL') {
            return `Photos/Minimap/SA${door}-OFF-S.png`;
        } else if (room === false && door === 'SL') {
            return `Photos/Minimap/UA${door}-OFF-S.png`;
        } else if (room === true && door === 'SW') {
            return `Photos/Minimap/S${wall}${door}-OFF-S.png`;
        } else if (room === true && door === 'SW+') {
            return `Photos/Minimap/S${wall}SW-OFF-S.png`;
        } else if (room === false && door === 'SW') {
            return `Photos/Minimap/U${wall}${door}-OFF-S.png`;
        } else if (room === false && door === 'SW+') {
            return `Photos/Minimap/U${wall}SW-OFF-S.png`;
        }
    }
})

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

// Hide the map when the "X" close button is clicked
close_map.addEventListener('click', () => {
    // Remove active class from all rooms and reset the toggle
    receive_room_1.classList.remove('active');
    receive_room_2.classList.remove('active');
    source_room.classList.remove('active');
    floorplan_menu.classList.remove('active');
    grid.classList.remove('active');
    mini_map_title.classList.remove('active');
    close_map.classList.remove('active'); // Hide the close button
    mini_map.classList.remove('active'); // Hide the mini-map
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