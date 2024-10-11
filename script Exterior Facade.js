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