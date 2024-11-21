// Play-Pause button function
let isPlaying = false; // Track the state of the toggle
let currentAudio = null; // Track the currently playing audio

function toggleImage() {
    const toggleImage = document.getElementById('toggleImage');

    if (isPlaying) {
        toggleImage.src = 'Photos/Play Button.png'; // Change to your "Play" image path
        toggleImage.alt = 'Play Image';
        stopAudio(); // Stop audio playback
    } else {
        toggleImage.src = 'Photos/Pause Button.png'; // Change to your "Pause" image path
        toggleImage.alt = 'Pause Image';
        playAudio(); // Start audio playback
    }

    isPlaying = !isPlaying; // Toggle the state
}

// Toggle switch audio function
function playAudio() {
    // Stop all audio elements
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0; // Reset the audio to the beginning
    });

    // Get selected options from all rows
    const Volume = document.querySelector('input[name="Volume"]:checked').value;
    const Wall = document.querySelector('input[name="Wall"]:checked').value;
    const Masking = document.querySelector('input[name="Masking"]:checked').value;
    const Room = document.querySelector('input[name="Room"]:checked').value;

    // Determine which audio to play based on the selected options
    let audioToPlay;
    if (Volume === 'Normal' && Wall === '1&1' && Masking === 'On' && Room === 'RoomA') {
        audioToPlay = '1+1,MaskingON,Normal';
    } else if (Volume === 'Normal' && Wall === '1&1' && Masking === 'On' && Room === 'RoomB') {
        audioToPlay = '1+1,MaskingON,Normal';
    } else if (Volume === 'Normal' && Wall === '1&1' && Masking === 'On' && Room === 'RoomC') {
        audioToPlay = '1+1,MaskingON,Normal';
    } else if (Volume === 'Normal' && Wall === '1&1' && Masking === 'Off' && Room === 'RoomA') {
        audioToPlay = '1+1,MaskingOFF,Normal';
    } else if (Volume === 'Normal' && Wall === '1&1' && Masking === 'Off' && Room === 'RoomB') {
        audioToPlay = '1+1,MaskingOFF,Normal';
    } else if (Volume === 'Normal' && Wall === '1&1' && Masking === 'Off' && Room === 'RoomC') {
        audioToPlay = '1+1,MaskingOFF,Normal';
    } else if (Volume === 'Normal' && Wall === '1&2' && Masking === 'On' && Room === 'RoomA') {
        audioToPlay = '1+2,MaskingON,Normal';
    } else if (Volume === 'Normal' && Wall === '1&2' && Masking === 'On' && Room === 'RoomB') {
        audioToPlay = '1+2,MaskingON,Normal';
    } else if (Volume === 'Normal' && Wall === '1&2' && Masking === 'On' && Room === 'RoomC') {
        audioToPlay = '1+2,MaskingON,Normal';
    } else if (Volume === 'Normal' && Wall === '1&2' && Masking === 'Off' && Room === 'RoomA') {
        audioToPlay = '1+2,MaskingOFF,Normal';
    } else if (Volume === 'Normal' && Wall === '1&2' && Masking === 'Off' && Room === 'RoomB') {
        audioToPlay = '1+2,MaskingOFF,Normal';
    } else if (Volume === 'Normal' && Wall === '1&2' && Masking === 'Off' && Room === 'RoomC') {
        audioToPlay = '1+2,MaskingOFF,Normal';
    } else if (Volume === 'Normal' && Wall === '2&2' && Masking === 'On' && Room === 'RoomA') {
        audioToPlay = '2+2,MaskingON,Normal';
    } else if (Volume === 'Normal' && Wall === '2&2' && Masking === 'On' && Room === 'RoomB') {
        audioToPlay = '2+2,MaskingON,Normal';
    } else if (Volume === 'Normal' && Wall === '2&2' && Masking === 'On' && Room === 'RoomC') {
        audioToPlay = '2+2,MaskingON,Normal';
    } else if (Volume === 'Normal' && Wall === '2&2' && Masking === 'Off' && Room === 'RoomA') {
        audioToPlay = '2+2,MaskingOFF,Normal';
    } else if (Volume === 'Normal' && Wall === '2&2' && Masking === 'Off' && Room === 'RoomB') {
        audioToPlay = '2+2,MaskingOFF,Normal';
    } else if (Volume === 'Normal' && Wall === '2&2' && Masking === 'Off' && Room === 'RoomC') {
        audioToPlay = '2+2,MaskingOFF,Normal';
    } else if (Volume === 'Raised' && Wall === '1&1' && Masking === 'On' && Room === 'RoomA') {
        audioToPlay = '1+1,MaskingON,Raised';
    } else if (Volume === 'Raised' && Wall === '1&1' && Masking === 'On' && Room === 'RoomB') {
        audioToPlay = '1+1,MaskingON,Raised';
    } else if (Volume === 'Raised' && Wall === '1&1' && Masking === 'On' && Room === 'RoomC') {
        audioToPlay = '1+1,MaskingON,Raised';
    } else if (Volume === 'Raised' && Wall === '1&1' && Masking === 'Off' && Room === 'RoomA') {
        audioToPlay = '1+1,MaskingOFF,Raised';
    } else if (Volume === 'Raised' && Wall === '1&1' && Masking === 'Off' && Room === 'RoomB') {
        audioToPlay = '1+1,MaskingOFF,Raised';
    } else if (Volume === 'Raised' && Wall === '1&1' && Masking === 'Off' && Room === 'RoomC') {
        audioToPlay = '1+1,MaskingOFF,Raised';
    } else if (Volume === 'Raised' && Wall === '1&2' && Masking === 'On' && Room === 'RoomA') {
        audioToPlay = '1+2,MaskingON,Raised';
    } else if (Volume === 'Raised' && Wall === '1&2' && Masking === 'On' && Room === 'RoomB') {
        audioToPlay = '1+2,MaskingON,Raised';
    } else if (Volume === 'Raised' && Wall === '1&2' && Masking === 'On' && Room === 'RoomC') {
        audioToPlay = '1+2,MaskingON,Raised';
    } else if (Volume === 'Raised' && Wall === '1&2' && Masking === 'Off' && Room === 'RoomA') {
        audioToPlay = '1+2,MaskingOFF,Raised';
    } else if (Volume === 'Raised' && Wall === '1&2' && Masking === 'Off' && Room === 'RoomB') {
        audioToPlay = '1+2,MaskingOFF,Raised';
    } else if (Volume === 'Raised' && Wall === '1&2' && Masking === 'Off' && Room === 'RoomC') {
        audioToPlay = '1+2,MaskingOFF,Raised';
    } else if (Volume === 'Raised' && Wall === '2&2' && Masking === 'On' && Room === 'RoomA') {
        audioToPlay = '2+2,MaskingON,Raised';
    } else if (Volume === 'Raised' && Wall === '2&2' && Masking === 'On' && Room === 'RoomB') {
        audioToPlay = '2+2,MaskingON,Raised';
    } else if (Volume === 'Raised' && Wall === '2&2' && Masking === 'On' && Room === 'RoomC') {
        audioToPlay = '2+2,MaskingON,Raised';
    } else if (Volume === 'Raised' && Wall === '2&2' && Masking === 'Off' && Room === 'RoomA') {
        audioToPlay = '2+2,MaskingOFF,Raised';
    } else if (Volume === 'Raised' && Wall === '2&2' && Masking === 'Off' && Room === 'RoomB') {
        audioToPlay = '2+2,MaskingOFF,Raised';
    } else if (Volume === 'Raised' && Wall === '2&2' && Masking === 'Off' && Room === 'RoomC') {
        audioToPlay = '2+2,MaskingOFF,Raised';
    }

    // Play the selected Audio
    if (audioToPlay) {
        const selectedAudio = document.getElementById(audioToPlay);
        selectedAudio.play();
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
        return;
    }
    // If playing, you can call playAudio() here if needed
    // Uncomment the next line if you want to play audio when switches change while in play mode
    playAudio(); 
}

// Add event listeners to the switches
document.querySelectorAll('input[name="Volume"], input[name="Wall"], input[name="Masking"], input[name="Room"]').forEach(switchElement => {
    switchElement.addEventListener('change', handleSwitchChange);
});

// Navigation mini-map changes the background image
function changeBackground(imageUrl) {
    // Select the Underheader division
    var Underheader = document.getElementById('Underheader'); // Assuming the division has an id of 'Underheader'
    
    // Change the background image and properties for the Underheader division
    Underheader.style.backgroundImage = imageUrl;
    Underheader.style.backgroundSize = 'contain';
    Underheader.style.backgroundRepeat = 'no-repeat'; // Do not repeat the background image
    Underheader.style.backgroundPosition = 'center'; // Center the background image
}
