// Minimap functionality

// Updating MiniMap image based on user-selections
document.addEventListener('DOMContentLoaded', () => {
    const windowRadios = document.querySelectorAll('input[name="Window"]');
    const roomRadios = document.querySelectorAll('input[name="Room"]');

    // Add event listeners to all relevant inputs
    windowRadios.forEach(radio => radio.addEventListener('change', updateImages));
    roomRadios.forEach(radio => radio.addEventListener('change', updateImages));
});

function updateImages() {
    const minimapImage = document.querySelector('.img-minimap');
    const room = minimapImage.getAttribute('data-value'); // Get the data-value from the image
    const window = document.querySelector('input[name="Window"]:checked').value;

    // Update Minimap Image
    minimapImage.src = getMinimapImage(room, window);
}

function getMinimapImage(room, window) {
    if (window === "Curtain STC 36"|| window === 'Curtain STC 43') {
        return `Photos/Minimap/Curtain-${room}.png`;
    } else if (window === 'Punched STC 36'|| window === 'Punched STC 39'|| window === 'Punched STC 42'|| window === 'Punched STC 46') {
        return `Photos/Minimap/Punched-${room}.png`;
    }
}

// Select the necessary elements from the DOM
const mini_map = document.querySelector('.mini-map'); // Select the mini-map element
const mini_map_title = document.querySelector('.mini-map-title');

function setRoomValue(value) {
    const img = document.querySelector('.img-minimap'); // Select the image
    img.setAttribute('data-value', value); // Update the data-value attribute
}

function regionOneFunction() {
    setRoomValue("Exterior"); // Change to the appropriate value for Region One
    updateImages();
    playAudio();
}

function regionTwoFunction() {
    setRoomValue("Interior"); // Change to the appropriate value for Region Two
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
        { coords: [0, 0, 62, 100], func: regionOneFunction }, // Region One
        { coords: [62, 0, 100, 100], func: regionTwoFunction }, // Region Two
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