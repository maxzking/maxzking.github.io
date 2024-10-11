// Audio switch that toggles on and off sound
const audioToggle = document.getElementById('audioToggle');
const audio = document.getElementById('audio');

audioToggle.addEventListener('change', function() {
    if (this.checked) {
        audio.play(); // Play audio when toggled on
    } else {
        audio.pause(); // Pause audio when toggled off
        audio.currentTime = 0; // Reset audio to the beginning
    }
});

// Navigation mini-map changes the background image
function changeBackground(imageUrl) {
    document.body.style.backgroundImage = imageUrl;
    document.body.style.backgroundSize = 'cover'; // Cover the entire background
    document.body.style.backgroundPosition = 'center'; // Center the background image
}