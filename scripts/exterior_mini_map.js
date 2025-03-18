// Minimap functionality
// Add event listeners to the switches
document.querySelectorAll('input[name="Window"], input[name="Room"]').forEach(switchElement => {
    switchElement.addEventListener('change', handleSwitchChange);
});

// Updating MiniMap image based on user-selections
document.addEventListener('DOMContentLoaded', () => {
    const windowRadios = document.querySelectorAll('input[name="Window"]');
    const roomRadios = document.querySelectorAll('input[name="Room"]');

    // Add event listeners to all relevant inputs
    windowRadios.forEach(radio => radio.addEventListener('change', updateImages));
    roomRadios.forEach(radio => radio.addEventListener('change', updateImages));

    function updateImages() {
        const room = document.querySelector('input[name="Room"]:checked').value;
        const window = document.querySelector('input[name="Window"]:checked').value;

        // Update Exterior Image
        const exteriorImage = document.querySelector('.img-exterior');
        exteriorImage.src = getExteriorImage(room);

        // Update Interior Image
        var interiorImage = document.querySelector('.img-interior');
        interiorImage.src = getInteriorImage(room, window);
    }

    function getExteriorImage(room) {
        if (room === "exterior") {
            return `Photos/Minimap/exterior_selected.png`;
        } else if (room !== 'exterior') {
            return `Photos/Minimap/exterior_unselected.png`;
        }
    }

    function getInteriorImage(room, window) {
        if (room === "interior") {
            return `Photos/Minimap/${window}_selected.png`;
        } else if (room !== "interior") {
            return `Photos/Minimap/${window}_unselected.png`;
        }
    }
});

// Select the necessary elements from the DOM
const floorplan_menu = document.getElementById('floorplan-menu');
const mini_map = document.querySelector('.mini-map'); // Select the mini-map element
const receive_room_1 = document.querySelector('.interior');
const receive_room_2 = document.querySelector('.receive-room-2');
const source_room = document.querySelector('.exterior');
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
