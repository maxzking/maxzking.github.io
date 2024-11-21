let isPlaying = false; // Track the state of the toggle

function toggleImage() {
    const toggleImage = document.getElementById('toggleImage');

    if (isPlaying) {
        toggleImage.src = 'Photos/Play Button.png'; // Change to your "Play" image path
        toggleImage.alt = 'Pause Image';
    } else {
        toggleImage.src = 'Photos/Pause Button.png'; // Change to your "Pause" image path
        toggleImage.alt = 'Play Image';
    }

    isPlaying = !isPlaying; // Toggle the state
}
