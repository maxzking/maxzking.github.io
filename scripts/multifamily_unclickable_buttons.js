// Select the minimap image element
const minimappicture = document.querySelector('.img-minimap');

// Function to toggle the unclickable class based on the selected room
function unclickable_buttons() {
    console.log("unclickable_buttons function called");
    const Room = minimappicture.getAttribute('data-value'); // Get the data-value from the image
    const floors = document.querySelectorAll('.choice-button-floor');
    const walls = document.querySelectorAll('.choice-button-wall');
    const floor_title = document.querySelector('.title_container_floor');
    const wall_title = document.querySelector('.title_container_wall');
    const party = document.querySelector('.choice-button-party');
    const footsteps = document.querySelector('.choice-button-footsteps');

    // Determine the current room type
    const isReceiveRoom1 = Room === "Receive1";
    const isReceiveRoom2 = Room === "Receive2";
    const isSourceRoom = Room === "Source";

    // Function to toggle classes and disable inputs
    function toggleElements(elements, unclickable) {
        // If elements is a single element, wrap it in an array
        if (!elements.forEach) {
            elements = [elements];
        }
        elements.forEach(element => {
            element.classList.toggle('unclickable', unclickable);
            const input = element.querySelector('input');
            if (input) {
                input.disabled = unclickable; // Disable the input if it exists
            }
        });
    }

    // Reset all elements to be clickable before applying new state
    toggleElements(floors, false);
    toggleElements(walls, false);
    toggleElements(party, false);
    toggleElements(footsteps, false);
    floor_title.classList.remove('unclickable');
    wall_title.classList.remove('unclickable');

    // Set titles and toggle elements based on room selection
    if (isReceiveRoom1) {
        toggleElements(floors, true); // Disable floors
        toggleElements(footsteps, true); // Disable footsteps
        floor_title.classList.add('unclickable');
    } else if (isReceiveRoom2) {
        toggleElements(walls, true); // Disable walls
        wall_title.classList.add('unclickable');
    } else if (isSourceRoom) {
        toggleElements(floors, true); // Disable floors
        toggleElements(walls, true); // Disable walls
        toggleElements(footsteps, true); // Disable footsteps
        floor_title.classList.add('unclickable');
        wall_title.classList.add('unclickable');
    }
}

// Add event listeners to the room radio buttons
const roomOptions = document.querySelectorAll('input[name="Room"]');
roomOptions.forEach(option => {
    option.addEventListener('change', unclickable_buttons);
});

// Initial call to set the state based on the default selected room
unclickable_buttons();

// Check if the element exists
if (minimappicture) {
    // Create a MutationObserver to watch for attribute changes
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'data-value') {
                const newValue = minimappicture.getAttribute('data-value');
                console.log("Data-value attribute changed to:", newValue);
                unclickable_buttons(); // Call the function to update button states
            }
        });
    });

    // Start observing the minimap image for attribute changes
    observer.observe(minimappicture, {
        attributes: true // Watch for attribute changes
    });
} else {
    console.log("Minimap image element not found.");
}
