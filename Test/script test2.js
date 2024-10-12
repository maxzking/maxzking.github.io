function playAudio() {
    // Stop all audio elements
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0; // Reset the audio to the beginning
    });

    // Get selected options from both rows
    const Frequency = document.querySelector('input[name="Frequency"]:checked').value;
    const Shape = document.querySelector('input[name="Shape"]:checked').value;

    // Determine which audio to play based on the selected options
    let audioToPlay;
    if (Frequency === '500Hz' && Shape === 'Sine') {
        audioToPlay = 'sine500';
    } else if (Frequency === '500Hz' && Shape === 'Square') {
        audioToPlay = 'square500';
    } else if (Frequency === '500Hz' && Shape === 'Saw') {
        audioToPlay = 'saw500';
    } else if (Frequency === '1000Hz' && Shape === 'Sine') {
        audioToPlay = 'sine1000';
    } else if (Frequency === '1000Hz' && Shape === 'Square') {
        audioToPlay = 'square1000';
    } else if (Frequency === '1000Hz' && Shape === 'Saw') {
        audioToPlay = 'saw1000';
    } else if (Frequency === '2000Hz' && Shape === 'Sine') {
        audioToPlay = 'sine2000';
    } else if (Frequency === '2000Hz' && Shape === 'Square') {
        audioToPlay = 'square2000';
    } else if (Frequency === '2000Hz' && Shape === 'Saw') {
        audioToPlay = 'saw2000';}

    // PLay the selected Audio
    if (audioToPlay) {
        const selectedAudio = document.getElementById(audioToPlay);
        selectedAudio.play();
    }
}