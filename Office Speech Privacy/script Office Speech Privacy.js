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
        audioToPlay = 'normal200sine';
    } else if (Volume === 'Normal' && Wall === '1&1' && Masking === 'On' && Room === 'RoomB') {
        audioToPlay = 'normal400sine';
    } else if (Volume === 'Normal' && Wall === '1&1' && Masking === 'On' && Room === 'RoomC') {
        audioToPlay = 'normal800sine';
    } else if (Volume === 'Normal' && Wall === '1&1' && Masking === 'Off' && Room === 'RoomA') {
        audioToPlay = 'normal200square';
    } else if (Volume === 'Normal' && Wall === '1&1' && Masking === 'Off' && Room === 'RoomB') {
        audioToPlay = 'normal400square';
    } else if (Volume === 'Normal' && Wall === '1&1' && Masking === 'Off' && Room === 'RoomC') {
        audioToPlay = 'normal800square';
    } else if (Volume === 'Normal' && Wall === '1&2' && Masking === 'On' && Room === 'RoomA') {
        audioToPlay = 'normal250sine';
    } else if (Volume === 'Normal' && Wall === '1&2' && Masking === 'On' && Room === 'RoomB') {
        audioToPlay = 'normal500sine';
    } else if (Volume === 'Normal' && Wall === '1&2' && Masking === 'On' && Room === 'RoomC') {
        audioToPlay = 'normal1000sine';
    } else if (Volume === 'Normal' && Wall === '1&2' && Masking === 'Off' && Room === 'RoomA') {
        audioToPlay = 'normal250square';
    } else if (Volume === 'Normal' && Wall === '1&2' && Masking === 'Off' && Room === 'RoomB') {
        audioToPlay = 'normal500square';
    } else if (Volume === 'Normal' && Wall === '1&2' && Masking === 'Off' && Room === 'RoomC') {
        audioToPlay = 'normal1000square';
    } else if (Volume === 'Normal' && Wall === '2&2' && Masking === 'On' && Room === 'RoomA') {
        audioToPlay = 'normal300sine';
    } else if (Volume === 'Normal' && Wall === '2&2' && Masking === 'On' && Room === 'RoomB') {
        audioToPlay = 'normal600sine';
    } else if (Volume === 'Normal' && Wall === '2&2' && Masking === 'On' && Room === 'RoomC') {
        audioToPlay = 'normal1200sine';
    } else if (Volume === 'Normal' && Wall === '2&2' && Masking === 'Off' && Room === 'RoomA') {
        audioToPlay = 'normal300square';
    } else if (Volume === 'Normal' && Wall === '2&2' && Masking === 'Off' && Room === 'RoomB') {
        audioToPlay = 'normal600square';
    } else if (Volume === 'Normal' && Wall === '2&2' && Masking === 'Off' && Room === 'RoomC') {
        audioToPlay = 'normal1200square';
    } else if (Volume === 'Raised' && Wall === '1&1' && Masking === 'On' && Room === 'RoomA') {
        audioToPlay = 'raised200sine';
    } else if (Volume === 'Raised' && Wall === '1&1' && Masking === 'On' && Room === 'RoomB') {
        audioToPlay = 'raised400sine';
    } else if (Volume === 'Raised' && Wall === '1&1' && Masking === 'On' && Room === 'RoomC') {
        audioToPlay = 'raised800sine';
    } else if (Volume === 'Raised' && Wall === '1&1' && Masking === 'Off' && Room === 'RoomA') {
        audioToPlay = 'raised200square';
    } else if (Volume === 'Raised' && Wall === '1&1' && Masking === 'Off' && Room === 'RoomB') {
        audioToPlay = 'raised400square';
    } else if (Volume === 'Raised' && Wall === '1&1' && Masking === 'Off' && Room === 'RoomC') {
        audioToPlay = 'raised800square';
    } else if (Volume === 'Raised' && Wall === '1&2' && Masking === 'On' && Room === 'RoomA') {
        audioToPlay = 'raised250sine';
    } else if (Volume === 'Raised' && Wall === '1&2' && Masking === 'On' && Room === 'RoomB') {
        audioToPlay = 'raised500sine';
    } else if (Volume === 'Raised' && Wall === '1&2' && Masking === 'On' && Room === 'RoomC') {
        audioToPlay = 'raised1000sine';
    } else if (Volume === 'Raised' && Wall === '1&2' && Masking === 'Off' && Room === 'RoomA') {
        audioToPlay = 'raised250square';
    } else if (Volume === 'Raised' && Wall === '1&2' && Masking === 'Off' && Room === 'RoomB') {
        audioToPlay = 'raised500square';
    } else if (Volume === 'Raised' && Wall === '1&2' && Masking === 'Off' && Room === 'RoomC') {
        audioToPlay = 'raised1000square';
    } else if (Volume === 'Raised' && Wall === '2&2' && Masking === 'On' && Room === 'RoomA') {
        audioToPlay = 'raised300sine';
    } else if (Volume === 'Raised' && Wall === '2&2' && Masking === 'On' && Room === 'RoomB') {
        audioToPlay = 'raised600sine';
    } else if (Volume === 'Raised' && Wall === '2&2' && Masking === 'On' && Room === 'RoomC') {
        audioToPlay = 'raised1200sine';
    } else if (Volume === 'Raised' && Wall === '2&2' && Masking === 'Off' && Room === 'RoomA') {
        audioToPlay = 'raised300square';
    } else if (Volume === 'Raised' && Wall === '2&2' && Masking === 'Off' && Room === 'RoomB') {
        audioToPlay = 'raised600square';
    } else if (Volume === 'Raised' && Wall === '2&2' && Masking === 'Off' && Room === 'RoomC') {
        audioToPlay = 'raised1200square';
    }
    // PLay the selected Audio
    if (audioToPlay) {
        const selectedAudio = document.getElementById(audioToPlay);
        selectedAudio.play();
    }
}


// Navigation mini-map changes the background image
function changeBackground(imageUrl) {
    document.body.style.backgroundImage = imageUrl;
    document.body.style.backgroundSize = 'auto'; // Cover the entire background
    document.body.style.backgroundRepeat = 'no-repeat'; // Cover the entire background
    document.body.style.backgroundPosition = 'center'; // Center the background image
}