// Caution Popup Closing Functionality
const close_button = document.querySelector('.close_button');
const caution_popup = document.querySelector('.caution_popup');
const caution_cover = document.querySelector('.caution_cover');

// Function to close the popup and cover
const closePopup = () => {
    caution_popup.classList.add('active'); // Add the active class to hide
    caution_cover.classList.add('active'); // Add the active class to hide
};

// Add event listener to the close button
close_button.addEventListener('click', closePopup);