// Function to toggle the unclickable class based on the selected room
function toggleDoorOptions() {
    const Room = document.querySelector('input[name="Room"]:checked');
    const doors = document.querySelectorAll('.choice-button-door');
    const walls = document.querySelectorAll('.choice-button-wall');
    const wall_12 = document.querySelectorAll('.choice-button-wall-1-2');
    const wall_22 = document.querySelectorAll('.choice-button-wall-2-2');
    const maskings = document.querySelectorAll('.single-select-switch');
    const door_title = document.querySelector('.title_container_door');
    const wall_title = document.querySelector('.title_container_wall');
    const masking_title = document.querySelector('.title_container_masking');

    const isReceiveRoom1 = Room && Room.value === "receive-room-1";
    const isReceiveRoom2 = Room && Room.value === "receive-room-2";
    const isSourceRoom = Room && Room.value === "source-room";

    // Function to toggle classes and disable inputs
    function toggleElements(elements, unclickable) {
        elements.forEach(element => {
            element.classList.toggle('unclickable', unclickable);
            element.querySelector('input').disabled = unclickable;
        });
    }

    // Set titles and toggle elements based on room selection and masking switch state
    door_title.classList.toggle('unclickable', isReceiveRoom1 || isSourceRoom);
    wall_title.classList.toggle('unclickable', isSourceRoom);
    masking_title.classList.toggle('unclickable', isSourceRoom);

    toggleElements(doors, isReceiveRoom1 || isSourceRoom);
    toggleElements(walls, isReceiveRoom2 || isSourceRoom);
    toggleElements(wall_12, isReceiveRoom2 || isSourceRoom);
    toggleElements(wall_22, isReceiveRoom2 || isSourceRoom);
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

// This function changes the wall setting to 1+1 when receive-room-2 is selected.
// Select the receive-room-2 radio button
const receiveRoom2 = document.getElementById('receive-room-2');
receiveRoom2.addEventListener('change', function() {
    if (this.checked) {
        // Check the wall input with value 1+1
        const wallInput = document.querySelector('input[name="Wall"][value="1+1"]');
        if (wallInput) {
            wallInput.checked = true; // Check the wall input
        }
    }
});