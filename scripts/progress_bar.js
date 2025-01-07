const audioElements = document.querySelectorAll('audio');
const progressContainer = document.getElementById('progress-subcontainer');
const progressBar = document.getElementById('progress-bar');
const timestamp = document.getElementById('timestamp');
const audiolength = document.getElementById('audiolength');

// Function to format time in minutes:seconds
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Add event listeners to each audio element
audioElements.forEach(audio => {
    audio.addEventListener('timeupdate', () => {
        const percentage = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = percentage + '%';
        timestamp.textContent = formatTime(audio.currentTime);
    });

    audio.addEventListener('loadedmetadata', () => {
        audiolength.textContent = formatTime(audio.duration);
    });

    // Click event to seek the audio
    progressContainer.addEventListener('click', (event) => {
        const rect = progressContainer.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const totalWidth = rect.width;
        const percentage = offsetX / totalWidth;

        // Set the current time of the clicked audio
        if (audio.duration) {
            audio.currentTime = percentage * audio.duration;
        } else {
            console.log("Audio duration is not available.");
        }

        console.log(`Clicked at: ${offsetX}px, Total Width: ${totalWidth}px, Percentage: ${percentage}`);
    });
});