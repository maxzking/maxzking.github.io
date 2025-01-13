// Function to toggle the unclickable class based on the selected room
function toggleDoorOptions() {
    const Room = document.querySelector('input[name="Room"]:checked');
    const doors = document.querySelectorAll('.choice-button-door');
    const walls = document.querySelectorAll('.choice-button-wall');
    const maskings = document.querySelectorAll('.single-select-switch');
    const door_title = document.querySelector('.title_container_door');
    const wall_title = document.querySelector('.title_container_wall');
    const masking_title = document.querySelector('.title_container_masking');

    const isReceiveRoom = Room && Room.value === "receive-room-1";
    const isSourceRoom = Room && Room.value === "source-room";

    // Check the state of the masking switch
    const maskingSwitch = document.getElementById('Masking');
    const isMaskingEnabled = maskingSwitch.checked;

    // Function to toggle classes and disable inputs
    function toggleElements(elements, unclickable) {
        elements.forEach(element => {
            element.classList.toggle('unclickable', unclickable);
            element.querySelector('input').disabled = unclickable;
        });
    }

    // Set titles and toggle elements based on room selection and masking switch state
    door_title.classList.toggle('unclickable', isReceiveRoom || isSourceRoom);
    wall_title.classList.toggle('unclickable', isSourceRoom);
    masking_title.classList.toggle('unclickable', isSourceRoom);

    toggleElements(doors, isReceiveRoom || isSourceRoom);
    toggleElements(walls, isSourceRoom);
    toggleElements(maskings, isSourceRoom);
}

// Add event listeners to the room radio buttons
const roomOptions = document.querySelectorAll('input[name="Room"]');
roomOptions.forEach(option => {
    option.addEventListener('change', toggleDoorOptions);
});

// Add event listener to the masking switch
const maskingSwitch = document.getElementById('Masking');
maskingSwitch.addEventListener('change', toggleDoorOptions);

// Initial call to set the state based on the default selected room
toggleDoorOptions();
