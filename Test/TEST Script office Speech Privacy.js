// Array Of Audio File Paths for clicking sound effect
const clickFiles = [
    'Audio/click-high.wav', // Replace with your audio file paths
    'Audio/click-normal.wav',
    'Audio/click-low.wav'
];

// Function to play a random click sound
function playRandomSound() {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * clickFiles.length);
    const randomAudio = new Audio(clickFiles[randomIndex]);
    randomAudio.play();
}


// Play-Pause button function
let isPlaying = false; // Track the state of the toggle
let currentAudio = null; // Track the currently playing audio

function toggleImage() {
    const toggleImage = document.getElementById('toggleImage');

    if (isPlaying) {
        toggleImage.src = 'Photos/Play Button.png'; // Change to your "Play" image path
        toggleImage.alt = 'Play Image';
        stopAudio(); // Stop audio playback
        playRandomSound();

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
    playRandomSound();

    // Stop all audio elements
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0; // Reset the audio to the beginning
    });

    // Get selected options from Volume, Wall,and Room
    const Volume = document.querySelector('input[name="Volume"]:checked').value;
    const Wall = document.querySelector('input[name="Wall"]:checked').value;
    const Room = document.querySelector('input[name="Room"]:checked').value;
    // Get the value of the toggle switch
    const MaskingToggle = document.getElementById('Masking');
    const Masking = MaskingToggle.checked ? 'On' : 'Off'; // Set value based on checked state
    // Determine which audio to play based on the selected options
    console.log(`Volume: ${Volume}, Wall: ${Wall}, Masking: ${Masking}, Room: ${Room}`);
    let audioToPlay;
    if (Volume === 'Normal' && Wall === '1' && Masking === 'On' && Room === 'receive-room-1') {
        audioToPlay = '1+1,MaskingON,Normal';
    } else if (Volume === 'Normal' && Wall === '1' && Masking === 'On' && Room === 'receive-room-2') {
        audioToPlay = '1+1,MaskingON,Normal';
    } else if (Volume === 'Normal' && Wall === '1' && Masking === 'On' && Room === 'source-room') {
        audioToPlay = '1+1,MaskingON,Normal';
    } else if (Volume === 'Normal' && Wall === '1' && Masking === 'Off' && Room === 'receive-room-1') {
        audioToPlay = '1+1,MaskingOFF,Normal';
    } else if (Volume === 'Normal' && Wall === '1' && Masking === 'Off' && Room === 'receive-room-2') {
        audioToPlay = '1+1,MaskingOFF,Normal';
    } else if (Volume === 'Normal' && Wall === '1' && Masking === 'Off' && Room === 'source-room') {
        audioToPlay = '1+1,MaskingOFF,Normal';
    } else if (Volume === 'Normal' && Wall === '2' && Masking === 'On' && Room === 'receive-room-1') {
        audioToPlay = '1+2,MaskingON,Normal';
    } else if (Volume === 'Normal' && Wall === '2' && Masking === 'On' && Room === 'receive-room-2') {
        audioToPlay = '1+2,MaskingON,Normal';
    } else if (Volume === 'Normal' && Wall === '2' && Masking === 'On' && Room === 'source-room') {
        audioToPlay = '1+2,MaskingON,Normal';
    } else if (Volume === 'Normal' && Wall === '2' && Masking === 'Off' && Room === 'receive-room-1') {
        audioToPlay = '1+2,MaskingOFF,Normal';
    } else if (Volume === 'Normal' && Wall === '2' && Masking === 'Off' && Room === 'receive-room-2') {
        audioToPlay = '1+2,MaskingOFF,Normal';
    } else if (Volume === 'Normal' && Wall === '2' && Masking === 'Off' && Room === 'source-room') {
        audioToPlay = '1+2,MaskingOFF,Normal';
    } else if (Volume === 'Normal' && Wall === '3' && Masking === 'On' && Room === 'receive-room-1') {
        audioToPlay = '2+2,MaskingON,Normal';
    } else if (Volume === 'Normal' && Wall === '3' && Masking === 'On' && Room === 'receive-room-2') {
        audioToPlay = '2+2,MaskingON,Normal';
    } else if (Volume === 'Normal' && Wall === '3' && Masking === 'On' && Room === 'source-room') {
        audioToPlay = '2+2,MaskingON,Normal';
    } else if (Volume === 'Normal' && Wall === '3' && Masking === 'Off' && Room === 'receive-room-1') {
        audioToPlay = '2+2,MaskingOFF,Normal';
    } else if (Volume === 'Normal' && Wall === '3' && Masking === 'Off' && Room === 'receive-room-2') {
        audioToPlay = '2+2,MaskingOFF,Normal';
    } else if (Volume === 'Normal' && Wall === '3' && Masking === 'Off' && Room === 'source-room') {
        audioToPlay = '2+2,MaskingOFF,Normal';
    } else if (Volume === 'Raised' && Wall === '1' && Masking === 'On' && Room === 'receive-room-1') {
        audioToPlay = '1+1,MaskingON,Raised';
    } else if (Volume === 'Raised' && Wall === '1' && Masking === 'On' && Room === 'receive-room-2') {
        audioToPlay = '1+1,MaskingON,Raised';
    } else if (Volume === 'Raised' && Wall === '1' && Masking === 'On' && Room === 'source-room') {
        audioToPlay = '1+1,MaskingON,Raised';
    } else if (Volume === 'Raised' && Wall === '1' && Masking === 'Off' && Room === 'receive-room-1') {
        audioToPlay = '1+1,MaskingOFF,Raised';
    } else if (Volume === 'Raised' && Wall === '1' && Masking === 'Off' && Room === 'receive-room-2') {
        audioToPlay = '1+1,MaskingOFF,Raised';
    } else if (Volume === 'Raised' && Wall === '1' && Masking === 'Off' && Room === 'source-room') {
        audioToPlay = '1+1,MaskingOFF,Raised';
    } else if (Volume === 'Raised' && Wall === '2' && Masking === 'On' && Room === 'receive-room-1') {
        audioToPlay = '1+2,MaskingON,Raised';
    } else if (Volume === 'Raised' && Wall === '2' && Masking === 'On' && Room === 'receive-room-2') {
        audioToPlay = '1+2,MaskingON,Raised';
    } else if (Volume === 'Raised' && Wall === '2' && Masking === 'On' && Room === 'source-room') {
        audioToPlay = '1+2,MaskingON,Raised';
    } else if (Volume === 'Raised' && Wall === '2' && Masking === 'Off' && Room === 'receive-room-1') {
        audioToPlay = '1+2,MaskingOFF,Raised';
    } else if (Volume === 'Raised' && Wall === '2' && Masking === 'Off' && Room === 'receive-room-2') {
        audioToPlay = '1+2,MaskingOFF,Raised';
    } else if (Volume === 'Raised' && Wall === '2' && Masking === 'Off' && Room === 'source-room') {
        audioToPlay = '1+2,MaskingOFF,Raised';
    } else if (Volume === 'Raised' && Wall === '3' && Masking === 'On' && Room === 'receive-room-1') {
        audioToPlay = '2+2,MaskingON,Raised';
    } else if (Volume === 'Raised' && Wall === '3' && Masking === 'On' && Room === 'receive-room-2') {
        audioToPlay = '2+2,MaskingON,Raised';
    } else if (Volume === 'Raised' && Wall === '3' && Masking === 'On' && Room === 'source-room') {
        audioToPlay = '2+2,MaskingON,Raised';
    } else if (Volume === 'Raised' && Wall === '3' && Masking === 'Off' && Room === 'receive-room-1') {
        audioToPlay = '2+2,MaskingOFF,Raised';
    } else if (Volume === 'Raised' && Wall === '3' && Masking === 'Off' && Room === 'receive-room-2') {
        audioToPlay = '2+2,MaskingOFF,Raised';
    } else if (Volume === 'Raised' && Wall === '3' && Masking === 'Off' && Room === 'source-room') {
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
        // Play a random sound first
        playRandomSound();
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

// Minimap Changes the Background Image
function changeBackground(imageUrl) {
    // Select the Underheader division
    var Underheader = document.getElementById('Underheader'); // Assuming the division has an id of 'Underheader'
    
    // Change the background image and properties for the Underheader division
    Underheader.style.backgroundImage = imageUrl;
    Underheader.style.backgroundSize = 'contain';
    Underheader.style.backgroundRepeat = 'no-repeat'; // Do not repeat the background image
    Underheader.style.backgroundPosition = 'center'; // Center the background image
}

// Updating MiniMap image based on user-selections
document.addEventListener('DOMContentLoaded', () => {
    const maskingToggle = document.getElementById('Masking');
    const wallRadios = document.querySelectorAll('input[name="Wall"]');
    const doorRadios = document.querySelectorAll('input[name="Door"]');
    const roomRadios = document.querySelectorAll('input[name="Room"]');

    // Add event listeners to all relevant inputs
    maskingToggle.addEventListener('change', updateImages);
    wallRadios.forEach(radio => radio.addEventListener('change', updateImages));
    doorRadios.forEach(radio => radio.addEventListener('change', updateImages));
    roomRadios.forEach(radio => radio.addEventListener('change', updateImages));

    function updateImages() {
        const selectedRoom1 = document.querySelector('input[name="Room"][value="receive-room-1"]').checked;
        const selectedRoom2 = document.querySelector('input[name="Room"][value="receive-room-2"]').checked;
        const selectedSourceRoom = document.querySelector('input[name="Room"][value="source-room"]').checked;
        const wall = document.querySelector('input[name="Wall"]:checked').value;
        const door = document.querySelector('input[name="Door"]:checked').value;
        const masking = maskingToggle.checked ? 'ON' : 'OFF';

        // Update Room 1 Image
        const room1Image = document.querySelector('.img-receive-room-1');
        room1Image.src = getRoom1Image(selectedRoom1, wall, door, masking);

        // Update Room 2 Image
        const room2Image = document.querySelector('.img-receive-room-2');
        room2Image.src = getRoom2Image(selectedRoom2, door, masking);

        // Update Source Room Image
        const sourceImage = document.querySelector('.img-source-room');
        sourceImage.src = getSourceImage(selectedSourceRoom, wall, door);
    }

    function getRoom1Image(room, wall, door, masking) {
        console.log(`Room: ${room}`)
        if (room === true) {
            return `Photos/S${wall}${door}-${masking}-1.png`;
        } else if (room === false) {
            return `Photos/U${wall}${door}-${masking}-1.png`;
        }
    }

    function getRoom2Image(room, door, masking) {
        console.log(`Room: ${room}`)
        if (room === true) {
            return `Photos/SA${door}-${masking}-2.png`;
        } else if (room === false) {
            return `Photos/UA${door}-${masking}-2.png`;
        }
    }

    function getSourceImage(room, wall, door) {
        console.log(`Room: ${room}`)
        if (room === true && door === 'SL') {
            return `Photos/SA${door}-OFF-S.png`;
        } else if (room === false && door === 'SL') {
            return `Photos/UA${door}-OFF-S.png`;
        } else if (room === true && door === 'SW') {
            return `Photos/S${wall}${door}-OFF-S.png`;
        } else if (room === false && door === 'SW') {
            return `Photos/U${wall}${door}-OFF-S.png`;
        }
    }
});