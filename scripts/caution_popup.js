// Caution Popup Elements
const cautionPopup = document.querySelector('.caution_popup');
const cautionCover = document.querySelector('.caution_cover');
const closeButton = document.querySelector('.close_button');
const audioDemo = document.getElementById('audio_demo');
const playButton = document.getElementById('popup_image');
const toggleImagePicture = document.getElementById('toggle_Image');

// Help Array
const instructions = [
    {
        title: "Help",
        content: "Select your Listening Location and press play to hear the audio. Select the Simulation Options to hear the differences based on each Simulation Location. The content will loop until you tap pause. The audio is calibrated to a default 50% volume. Use safety when adjusting the volume. ",
        img: "Photos/Play Button.png"
    },
];

let currentIndex = 0;

// Popup Title and Content Elements
const popupTitle = document.getElementById('popup_title');
const popupContent = document.getElementById('popup_content');
const popupImage = document.getElementById('popup_image');
const leftArrow = document.getElementById('left_arrow');
const rightArrow = document.getElementById('right_arrow');

// Function to update the popup content
function updatePopup() {
    const instruction = instructions[currentIndex];
    popupTitle.textContent = instruction.title;
    popupContent.textContent = instruction.content;
    popupImage.src = instruction.img; // Update the image source

    // Show/hide navigation buttons based on current index
    leftArrow.classList.toggle('hidden', currentIndex === 0);
    rightArrow.classList.toggle('hidden', currentIndex === instructions.length - 1);
}

// Function to show the caution popup
function showCautionPopup() {
    cautionPopup.classList.add('active'); // Add active class to show
    cautionCover.classList.add('active'); // Add active class to show
    document.body.classList.add('no-scroll'); // Disable scrolling
    updatePopup(); // Initialize the popup with the first instruction
}

// Function to hide the caution popup
function hideCautionPopup() {
    cautionPopup.classList.remove('active'); // Remove active class to hide
    cautionCover.classList.remove('active'); // Remove active class to hide
    document.body.classList.remove('no-scroll'); // Enable scrolling
}

// Event listener for the close button
closeButton.addEventListener('click', hideCautionPopup);

// Event listeners for navigation buttons
rightArrow.addEventListener('click', () => {
    if (currentIndex < instructions.length - 1) {
        currentIndex++;
        updatePopup();
    }
});

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updatePopup();
    }
});

// Event listener for the play button
playButton.addEventListener('click', () => {
    if (audioDemo.paused) {
        audioDemo.play();
        playButton.src = 'Photos/Pause Button.png'; // Change to your pause icon
        toggleImagePicture.src = 'Photos/Pause Button.png'
        isPlaying = !isPlaying; // Toggle the state
    } else {
        audioDemo.pause();
        playButton.src = 'Photos/Play Button.png'; // Change to your play icon
        toggleImagePicture.src = 'Photos/Play Button.png'
        isPlaying = !isPlaying; // Toggle the state
    }
});


// Example of showing the popup (you can call this function when needed)
showCautionPopup();

// Get the help button element
const helpButton = document.getElementById('help_button');

// Event listener for the help button
helpButton.addEventListener('click', showCautionPopup);