// Function to toggle the unclickable class based on the selected room
function unlcikable_buttons() {
    const Room = document.querySelector('input[name="Room"]:checked');
    const floors = document.querySelectorAll('.choice-button-floor');
    const walls = document.querySelectorAll('.choice-button-wall');
    const floor_title = document.querySelector('.title_container_floor');
    const wall_title = document.querySelector('.title_container_wall');

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
    floor_title.classList.toggle('unclickable', isReceiveRoom1 || isSourceRoom);
    wall_title.classList.toggle('unclickable', isReceiveRoom2 || isSourceRoom);

    toggleElements(floors, isReceiveRoom1 || isSourceRoom);
    toggleElements(walls, isReceiveRoom2 || isSourceRoom);
}

// Add event listeners to the room radio buttons
const roomOptions = document.querySelectorAll('input[name="Room"]');
roomOptions.forEach(option => {
    option.addEventListener('change', unlcikable_buttons);
});

// Initial call to set the state based on the default selected room
unlcikable_buttons();