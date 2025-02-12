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
    const Room = document.querySelector('input[name="Room"]:checked').value;
    const Floor = document.querySelector('input[name="Floor"]:checked').value;
    // Determine which audio to play based on the selected options
    console.log(`Volume: ${Volume}, Wall: ${Wall}, Room: ${Room}, Floor: ${Floor}`);
    let audioToPlay;
        if (Room === "source-room") {
            audioToPlay = `party-source-${Volume}`;
        }
        if (Room === "receive-room-1") {
            audioToPlay = `${Wall}-${Volume}`;
        }
        if (Room === "receive-room-2") {
            audioToPlay = `${Floor}-${Volume}`;
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