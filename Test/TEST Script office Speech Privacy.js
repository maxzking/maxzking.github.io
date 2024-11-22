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
    if (!isPlaying) {
        return; // Exit the function if audio is paused
    }
    // Stop all audio elements
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0; // Reset the audio to the beginning
    });

    // Get selected options from Volume, Wall,a d Room
    const Volume = document.querySelector('input[name="Volume"]:checked').value;
    const Wall = document.querySelector('input[name="Wall"]:checked').value;
    const Room = document.querySelector('input[name="Room"]:checked').value;
    // Get the value of the toggle switch
    const MaskingToggle = document.getElementById('Masking');
    const Masking = MaskingToggle.checked ? 'On' : 'Off'; // Set value based on checked state
    // Determine which audio to play based on the selected options
    console.log(`Volume: ${Volume}, Wall: ${Wall}, Masking: ${Masking}, Room: ${Room}`);
    let audioToPlay;
    if (Volume === 'Normal' && Wall === '1&1' && Masking === 'On' && Room === 'receive-room-1') {
        audioToPlay = '1+1,MaskingON,Normal';
    } else if (Volume === 'Normal' && Wall === '1&1' && Masking === 'On' && Room === 'receive-room-2') {
        audioToPlay = '1+1,MaskingON,Normal';
    } else if (Volume === 'Normal' && Wall === '1&1' && Masking === 'On' && Room === 'source-room') {
        audioToPlay = '1+1,MaskingON,Normal';
    } else if (Volume === 'Normal' && Wall === '1&1' && Masking === 'Off' && Room === 'receive-room-1') {
        audioToPlay = '1+1,MaskingOFF,Normal';
    } else if (Volume === 'Normal' && Wall === '1&1' && Masking === 'Off' && Room === 'receive-room-2') {
        audioToPlay = '1+1,MaskingOFF,Normal';
    } else if (Volume === 'Normal' && Wall === '1&1' && Masking === 'Off' && Room === 'source-room') {
        audioToPlay = '1+1,MaskingOFF,Normal';
    } else if (Volume === 'Normal' && Wall === '1&2' && Masking === 'On' && Room === 'receive-room-1') {
        audioToPlay = '1+2,MaskingON,Normal';
    } else if (Volume === 'Normal' && Wall === '1&2' && Masking === 'On' && Room === 'receive-room-2') {
        audioToPlay = '1+2,MaskingON,Normal';
    } else if (Volume === 'Normal' && Wall === '1&2' && Masking === 'On' && Room === 'source-room') {
        audioToPlay = '1+2,MaskingON,Normal';
    } else if (Volume === 'Normal' && Wall === '1&2' && Masking === 'Off' && Room === 'receive-room-1') {
        audioToPlay = '1+2,MaskingOFF,Normal';
    } else if (Volume === 'Normal' && Wall === '1&2' && Masking === 'Off' && Room === 'receive-room-2') {
        audioToPlay = '1+2,MaskingOFF,Normal';
    } else if (Volume === 'Normal' && Wall === '1&2' && Masking === 'Off' && Room === 'source-room') {
        audioToPlay = '1+2,MaskingOFF,Normal';
    } else if (Volume === 'Normal' && Wall === '2&2' && Masking === 'On' && Room === 'receive-room-1') {
        audioToPlay = '2+2,MaskingON,Normal';
    } else if (Volume === 'Normal' && Wall === '2&2' && Masking === 'On' && Room === 'receive-room-2') {
        audioToPlay = '2+2,MaskingON,Normal';
    } else if (Volume === 'Normal' && Wall === '2&2' && Masking === 'On' && Room === 'source-room') {
        audioToPlay = '2+2,MaskingON,Normal';
    } else if (Volume === 'Normal' && Wall === '2&2' && Masking === 'Off' && Room === 'receive-room-1') {
        audioToPlay = '2+2,MaskingOFF,Normal';
    } else if (Volume === 'Normal' && Wall === '2&2' && Masking === 'Off' && Room === 'receive-room-2') {
        audioToPlay = '2+2,MaskingOFF,Normal';
    } else if (Volume === 'Normal' && Wall === '2&2' && Masking === 'Off' && Room === 'source-room') {
        audioToPlay = '2+2,MaskingOFF,Normal';
    } else if (Volume === 'Raised' && Wall === '1&1' && Masking === 'On' && Room === 'receive-room-1') {
        audioToPlay = '1+1,MaskingON,Raised';
    } else if (Volume === 'Raised' && Wall === '1&1' && Masking === 'On' && Room === 'receive-room-2') {
        audioToPlay = '1+1,MaskingON,Raised';
    } else if (Volume === 'Raised' && Wall === '1&1' && Masking === 'On' && Room === 'source-room') {
        audioToPlay = '1+1,MaskingON,Raised';
    } else if (Volume === 'Raised' && Wall === '1&1' && Masking === 'Off' && Room === 'receive-room-1') {
        audioToPlay = '1+1,MaskingOFF,Raised';
    } else if (Volume === 'Raised' && Wall === '1&1' && Masking === 'Off' && Room === 'receive-room-2') {
        audioToPlay = '1+1,MaskingOFF,Raised';
    } else if (Volume === 'Raised' && Wall === '1&1' && Masking === 'Off' && Room === 'source-room') {
        audioToPlay = '1+1,MaskingOFF,Raised';
    } else if (Volume === 'Raised' && Wall === '1&2' && Masking === 'On' && Room === 'receive-room-1') {
        audioToPlay = '1+2,MaskingON,Raised';
    } else if (Volume === 'Raised' && Wall === '1&2' && Masking === 'On' && Room === 'receive-room-2') {
        audioToPlay = '1+2,MaskingON,Raised';
    } else if (Volume === 'Raised' && Wall === '1&2' && Masking === 'On' && Room === 'source-room') {
        audioToPlay = '1+2,MaskingON,Raised';
    } else if (Volume === 'Raised' && Wall === '1&2' && Masking === 'Off' && Room === 'receive-room-1') {
        audioToPlay = '1+2,MaskingOFF,Raised';
    } else if (Volume === 'Raised' && Wall === '1&2' && Masking === 'Off' && Room === 'receive-room-2') {
        audioToPlay = '1+2,MaskingOFF,Raised';
    } else if (Volume === 'Raised' && Wall === '1&2' && Masking === 'Off' && Room === 'source-room') {
        audioToPlay = '1+2,MaskingOFF,Raised';
    } else if (Volume === 'Raised' && Wall === '2&2' && Masking === 'On' && Room === 'receive-room-1') {
        audioToPlay = '2+2,MaskingON,Raised';
    } else if (Volume === 'Raised' && Wall === '2&2' && Masking === 'On' && Room === 'receive-room-2') {
        audioToPlay = '2+2,MaskingON,Raised';
    } else if (Volume === 'Raised' && Wall === '2&2' && Masking === 'On' && Room === 'source-room') {
        audioToPlay = '2+2,MaskingON,Raised';
    } else if (Volume === 'Raised' && Wall === '2&2' && Masking === 'Off' && Room === 'receive-room-1') {
        audioToPlay = '2+2,MaskingOFF,Raised';
    } else if (Volume === 'Raised' && Wall === '2&2' && Masking === 'Off' && Room === 'receive-room-2') {
        audioToPlay = '2+2,MaskingOFF,Raised';
    } else if (Volume === 'Raised' && Wall === '2&2' && Masking === 'Off' && Room === 'source-room') {
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
document.querySelectorAll('input[name="Volume"], input[name="Wall"], input[name="Room"], #Masking').forEach(switchElement => {
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
// Function to change the image based on the selected radio button
function changeImage(selectedRadio) {
    // Get all radio buttons
    const radios = document.querySelectorAll('input[name="Room"]');
    // Get all images
    const images = document.querySelectorAll('.grid img');

    // Loop through all radio buttons
    radios.forEach((radio, index) => {
        if (radio.checked) {
            // Change the image to the selected state
            images[index].src = images[index].src.replace('Unselected', 'Selected'); // Change to selected image
        } else {
            // Revert the image to the unselected state
            images[index].src = images[index].src.replace('Selected', 'Unselected'); // Change back to unselected image
        }
    });
}
