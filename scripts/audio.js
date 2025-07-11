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

    // Get selected options from Volume, Wall,and Room
    const Volume = document.querySelector('input[name="Volume"]:checked').value;
    const Wall = document.querySelector('input[name="Wall"]:checked').value;
    const minimapImage = document.querySelector('.img-minimap');
    const Room = minimapImage.getAttribute('data-value'); // Get the data-value from the image
    const Door = document.querySelector('input[name="Door"]:checked').value;
    // Event Listeners
    maskingToggle.addEventListener('change', updateImages);
    // Get the value of the toggle switch
    const MaskingToggle = document.getElementById('Masking');
    const Masking = MaskingToggle.checked ? 'ON' : 'OFF'; // Set value based on checked state
    // Determine which audio to play based on the selected options
    console.log(`Volume: ${Volume}, Wall: ${Wall}, Masking: ${Masking}, Room: ${Room}, Door: ${Door}`);
    let audioToPlay;
        if (Room === "Source") {
            audioToPlay = `${Room}-${Volume}`;
            console.log(audioToPlay)
        }
        if (Room === 'Receive1') {
            audioToPlay = `${Room}-${Volume}-${Wall}-${Masking}`;
            console.log(audioToPlay)
        }
        if (Room === 'Receive2') {
            audioToPlay = `${Room}-${Volume}-${Door}-${Masking}`;
            console.log(audioToPlay)
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

// Add event listeners to the switches
document.querySelectorAll('input[name="Volume"], input[name="Wall"], input[name="Door"], #Masking').forEach(switchElement => {
    switchElement.addEventListener('change', handleSwitchChange);
});

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
