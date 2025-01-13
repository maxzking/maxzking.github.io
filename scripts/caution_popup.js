// Caution Popup Elements
const cautionPopup = document.querySelector('.caution_popup');
const cautionCover = document.querySelector('.caution_cover');
const closeButton = document.querySelector('.close_button');
const audioDemo = document.getElementById('audio_demo');
const playButton = document.getElementById('popup_image'); // Assuming this is the play button

// Instructions Array
const instructions = [
    {
        title: "Instruction 1/5",
        content: "Press play on the test audio below and adjust your listening device to a comfortable volume. The volume in this listening demonstration varies widely. For your safety, please use caution with the volume settings on your listening device.",
        img: "Photos/Play Button.png"
    },
    {
        title: "Instruction 2/5",
        content: "The Selected Listening Path shows the source room (where the office conversation is happening) and the selected room (your location is highlighted in orange).",
        img: "Photos/Instructions/selected_listening_path.png"
    },
    {
        title: "Instruction 3/5",
        content: "Use the mini-map on the left side of the screen to select which room you are listening from.",
        img: "Photos/Instructions/mini-map.png"
    },
    {
        title: "Instruction 4/5",
        content: "Use the controls on the left side of the screen to change the volume of the source and the partitions between source and receive rooms.",
        img: "Photos/Instructions/volume_settings.png"
    },
    {
        title: "Instruction 5/5",
        content: "Use the playbar at the bottom of the screen to scroll through and Pause/Play the audio.",
        img: "Photos/Instructions/playbar.png"
    }
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
    cautionPopup.classList.remove('active');
    cautionCover.classList.remove('active');
    document.body.classList.add('no-scroll'); // Disable scrolling
    updatePopup(); // Initialize the popup with the first instruction
}

// Function to hide the caution popup
function hideCautionPopup() {
    cautionPopup.classList.add('active');
    cautionCover.classList.add('active');
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
    } else {
        audioDemo.pause();
        playButton.src = 'Photos/Play Button.png'; // Change to your play icon
    }
});

// Event listener for clicks outside the caution popup
document.addEventListener('click', (event) => {
    if (!cautionPopup.contains(event.target) && !cautionCover.contains(event.target)) {
        audioDemo.pause(); // Pause the audio
    }
});

// Example of showing the popup (you can call this function when needed)
showCautionPopup();

// Get the help button element
const helpButton = document.getElementById('help_button');

// Event listener for the help button
helpButton.addEventListener('click', showCautionPopup);