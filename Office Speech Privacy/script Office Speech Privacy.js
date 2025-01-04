// Array Of Audio File Paths for clicking sound effect
const clickFiles = [
    'Audio/select_sound.wav',
    'Audio/select_sound_plus1.wav'
];

// Function to play a random click sound
function playSelectSound() {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * clickFiles.length);
    const randomAudio = new Audio(clickFiles[randomIndex]);
    randomAudio.play();
}

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

// Toggle switch audio function
function playAudio() {
    if (!isPlaying) {
        return; // Exit the function if audio is paused
    }

    // Play a random sound first
    playSelectSound();

    // Stop all audio elements
    const audios = document.querySelectorAll('audio');

    // Get selected options from Volume, Wall,and Room
    const Volume = document.querySelector('input[name="Volume"]:checked').value;
    const Wall = document.querySelector('input[name="Wall"]:checked').value;
    const Room = document.querySelector('input[name="Room"]:checked').value;
    // Get the value of the toggle switch
    const MaskingToggle = document.getElementById('Masking');
    const Masking = MaskingToggle.checked ? 'ON' : 'OFF'; // Set value based on checked state
    // Determine which audio to play based on the selected options
    console.log(`Volume: ${Volume}, Wall: ${Wall}, Masking: ${Masking}, Room: ${Room}`);
    let audioToPlay;
        if (Room === "receive-room-1") {
            audioToPlay = `receive-room-1-${Volume}${Wall}${Masking}`;
        }
        if (Room === "source-room") {
            audioToPlay = `source-room-${Volume}`;
        }

    // Play the selected Audio
    if (audioToPlay) {
        const selectedAudio = document.getElementById(audioToPlay);

        // If there is a currently playing audio, get its current time
        if (currentAudio && currentAudio !== selectedAudio) {
            const currentTime = currentAudio.currentTime; // Get the current time of the currently playing audio
            currentAudio.pause(); // Pause the current audio
            selectedAudio.currentTime = currentTime; // Set the new audio's current time to the old audio's current time
        }

        selectedAudio.play(); // Play the selected audio
        currentAudio = selectedAudio; // Track the currently playing audio
    }
}

function stopAudio() {
    if (currentAudio) {
        currentAudio.pause(); // Pause the currently playing audio
        currentAudio.currentTime = 0; // Reset the audio to the beginning
        currentAudio = null; // Clear the current audio reference
    }
}

// Function to handle switch changes
function handleSwitchChange() {
    // If not playing, prevent any audio from starting
    if (!isPlaying) {
        // Play a random sound first
        playSelectSound();
        return;
    }
    // If playing, you can call playAudio() here if needed
    // Uncomment the next line if you want to play audio when switches change while in play mode
    
    playAudio(); 
}

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
        if (room === true) {
            return `Photos/Minimap/S${wall}${door}-${masking}-1.png`;
        } else if (room === false) {
            return `Photos/Minimap/U${wall}${door}-${masking}-1.png`;
        }
    }

    function getRoom2Image(room, door, masking) {
        if (room === true) {
            return `Photos/Minimap/SA${door}-${masking}-2.png`;
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
        } else if (room === false && door === 'SW') {
            return `Photos/Minimap/U${wall}${door}-OFF-S.png`;
        }
    }

    function getListeningImage(room, wall, door, masking){
        if (room === 'source-room' && door === 'SL') {
            return `Photos/Background/A${door}-OFF-S.png`;
        } else if (room === 'source-room' && door === 'SW') {
            return `Photos/Background/${wall}${door}-OFF-S.png`;
        } else if (room === 'receive-room-1') {
            return `Photos/Background/${wall}${door}-${masking}-1.png`;
        } else if (room === 'receive-room-2') {
            return `Photos/Background/${wall}${door}-${masking}-2.png`;
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

// Caution Popup Closing Functionality
const close_button = document.querySelector('.close_button');
const caution_popup = document.querySelector('.caution_popup');
const caution_cover = document.querySelector('.caution_cover');

// Function to close the popup and cover
const closePopup = () => {
    caution_popup.classList.add('active'); // Add the active class to hide
    caution_cover.classList.add('active'); // Add the active class to hide
};

// Add event listener to the close button
close_button.addEventListener('click', closePopup);