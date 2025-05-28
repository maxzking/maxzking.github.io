// Minimap functionality
// Add event listeners to the switches
document.querySelectorAll('input[name="Volume"], input[name="Wall"], input[name="Floor"]').forEach(switchElement => {
    switchElement.addEventListener('change', handleSwitchChange);
});

// Play-Pause button function
let isPlaying = false; // Track the state of the toggle
let currentAudio = null; // Track the currently playing audio

function toggleImage() {
    const toggleImage = document.getElementById('toggle_Image');

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
    const toggleImageElement = document.getElementById('toggle_Image');
    const popupImage = document.getElementById('popup_image');

    // Add event listeners to all relevant inputs
    wallRadios.forEach(radio => radio.addEventListener('change', updateImages));
    floorRadios.forEach(radio => radio.addEventListener('change', updateImages));
    roomRadios.forEach(radio => radio.addEventListener('change', updateImages));
    
    // Add event listener for the toggle and popup image
    toggleImageElement.addEventListener('click', () => {
        updateImages(); // Call updateImages after toggling
    });
    popupImage.addEventListener('click', () => {
        updateImages(); // Call updateImages after toggling
    });
});

function updateImages() {
    const minimapImage = document.querySelector('.img-minimap');
    const room = minimapImage.getAttribute('data-value'); // Get the data-value from the imagee;

    // Update Minimap Image
    minimapImage.src = getMinimapImage(room);
    }

function getMinimapImage(room) {
    return `Photos/Minimap/${room}.png`;
}

// Select the necessary elements from the DOM
const mini_map = document.querySelector('.mini-map'); // Select the mini-map element
const mini_map_title = document.querySelector('.mini-map-title');

function setRoomValue(value) {
    const img = document.querySelector('.img-minimap'); // Select the image
    img.setAttribute('data-value', value); // Update the data-value attribute
}

function regionOneFunction() {
    setRoomValue("Receive1"); // Change to the appropriate value for Region One
    updateImages();
    playAudio();
}

function regionTwoFunction() {
    setRoomValue("Source"); // Change to the appropriate value for Region Two
    updateImages();
    playAudio();
}

function regionThreeFunction() {
    setRoomValue("Receive2"); // Change to the appropriate value for Region Two
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
        { coords: [10, 10, 50, 50], func: regionOneFunction }, // Region One
        { coords: [50, 10, 90, 50], func: regionTwoFunction }, // Region Two
        { coords: [50, 50, 90, 90], func: regionThreeFunction }, // Region Two
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