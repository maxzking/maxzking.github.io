const audio = document.getElementById('audio');
const progressContainer = document.getElementById('progress-subcontainer');
const progressBar = document.getElementById('progress-bar');
const timestamp = document.getElementById('timestamp');
const audiolength = document.getElementById('audiolength');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');

// Function to format time in minutes:seconds
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Update the progress bar as the audio plays
audio.addEventListener('timeupdate', () => {
    const percentage = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = percentage + '%';
    timestamp.textContent = formatTime(audio.currentTime);
});

// Update the audio length when metadata is loaded
audio.addEventListener('loadedmetadata', () => {
    audiolength.textContent = formatTime(audio.duration);
});

// Click event to seek the audio
progressContainer.addEventListener('click', (event) => {
    const rect = progressContainer.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const totalWidth = rect.width;
    const percentage = offsetX / totalWidth;
    audio.currentTime = percentage * audio.duration;
});

// Play and pause functionality
playButton.addEventListener('click', () => {
    audio.play();
});

pauseButton.addEventListener('click', () => {
    audio.pause();
});
