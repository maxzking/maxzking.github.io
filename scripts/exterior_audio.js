// Array Of Audio File Paths for clicking sound effect
const clickFiles = [
    'Audio/select_sound.wav',
];

// Function to play a random click sound
function playSelectSound() {
    // Generate a random index
    const randomAudio = new Audio(clickFiles);
    randomAudio.play();
}
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


// Toggle switch audio function
function playAudio() {
    if (!isPlaying) {
        return; // Exit the function if audio is paused
    }

    // Play a random sound first
    playSelectSound();

    // Get selected options from Volume, Window,and Room
    const Window = document.querySelector('input[name="Window"]:checked').value;
    const Room = document.querySelector('input[name="Room"]:checked').value;
    // Determine which audio to play based on the selected options
    console.log(`Window: ${Window}, Room: ${Room}`);
    let audioToPlay;
        if (Room === "exterior") {
            audioToPlay = `exterior_facade_soundscape`;
        }
        if (Room === "interior") {
            audioToPlay = `${Window}`;
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
        // Update the progress bar and set up event listeners
    }
}

function stopAudio() {
    if (currentAudio) {
        currentAudio.pause(); // Pause the currently playing audio
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