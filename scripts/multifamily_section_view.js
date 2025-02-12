// Minimap functionality
// Add event listeners to the switches
document.querySelectorAll('input[name="Volume"], input[name="Wall"], input[name="Room"], input[name="Floor"]').forEach(switchElement => {
    switchElement.addEventListener('change', handleSwitchChange);
});

// Play-Pause button function
let isPlaying = false; // Track the state of the toggle
let currentAudio = null; // Track the currently playing audio

function toggleImage() {
    const toggleImage = document.getElementById('toggleImage');

    if (isPlaying) {
        toggleImage.src = 'Photos/Play Button.png'; // Change to your "Play" image path
        toggleImage.alt = 'Play Image';
        stopAudio(); // Stop audio playback
        playSelectSound();
    } else {
        toggleImage.src = 'Photos/Pause Button.png'; // Change to your "Pause" image path
        toggleImage.alt = 'Pause Image';
        playAudio(); // Start audio playback
    }

    isPlaying = !isPlaying; // Toggle the state
}

// Updating Multifamily Section image based on user-selections
document.addEventListener('DOMContentLoaded', () => {
    const wallRadios = document.querySelectorAll('input[name="Wall"]');
    const floorRadios = document.querySelectorAll('input[name="Floor"]');
    const roomRadios = document.querySelectorAll('input[name="Room"]');
    const toggleImageElement = document.getElementById('toggleImage');

    // Add event listeners to all relevant inputs
    wallRadios.forEach(radio => radio.addEventListener('change', updateImages));
    floorRadios.forEach(radio => radio.addEventListener('change', updateImages));
    roomRadios.forEach(radio => radio.addEventListener('change', updateImages));
    
    // Add event listener for the toggle image
    toggleImageElement.addEventListener('click', () => {
        updateImages(); // Call updateImages after toggling
    });

    function updateImages() {
        const selectedRoom1 = document.querySelector('input[name="Room"][value="receive-room-1"]').checked;
        const selectedRoom2 = document.querySelector('input[name="Room"][value="receive-room-2"]').checked;
        const selectedSourceRoom = document.querySelector('input[name="Room"][value="source-room"]').checked;
        const wall = document.querySelector('input[name="Wall"]:checked').value;
        const floor = document.querySelector('input[name="Floor"]:checked').value;

        // Update Room 1 Image
        const room1Image = document.querySelector('.img-receive-room-1');
        room1Image.src = getRoom1Image(selectedRoom1);

        // Update Room 2 Image
        const room2Image = document.querySelector('.img-receive-room-2');
        room2Image.src = getRoom2Image(selectedRoom2);

        // Update Source Room Image
        const sourceImage = document.querySelector('.img-source-room');
        sourceImage.src = getSourceImage(selectedSourceRoom, isPlaying);

        // Update Interior Wall image
        const wallImage = document.querySelector('.img-interior-wall');
        wallImage.src = getWallImage(wall, selectedRoom1);

        // Update Interior Wall image
        const floorImage = document.querySelector('.img-floor');
        floorImage.src = getfloorImage(floor, selectedRoom2);
    }

    function getRoom1Image(room) {
        return room ? `Photos/Minimap/receive-room-1-S.png` : `Photos/Minimap/receive-room-1-U.png`;
    }

    function getRoom2Image(room) {
        return room ? `Photos/Minimap/receive-room-2-S.png` : `Photos/Minimap/receive-room-2-U.png`;
    }

    function getSourceImage(room, isPlaying) {
        if (room && isPlaying) {
            return `Photos/Minimap/source-room-S-Play.png`;
        } else if (room && !isPlaying) {
            return `Photos/Minimap/source-room-S-Pause.png`;
        } else if (!room && isPlaying) {
            return `Photos/Minimap/source-room-U-Play.png`;
        } else if (!room && !isPlaying) {
            return `Photos/Minimap/source-room-U-Pause.png`;
        }
    }

    function getWallImage(wall, selectedRoom1) {
        return selectedRoom1 ? `Photos/Minimap/${wall}.png` : `Photos/Minimap/black-filler.png`;
    }

    function getfloorImage(floor, selectedRoom2){
        return selectedRoom2 ? `Photos/Minimap/${floor}.png` : `Photos/Minimap/black-filler.png`;
    }
});

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