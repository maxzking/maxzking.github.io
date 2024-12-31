// What making some of the changes that DuckDuck Go Ai Suggested
function changeRoom1Image(selectedRadio) {
    const selectedRoom = selectedRadio.value;
    const Wall = document.querySelector('input[name="Wall"]:checked').value;
    const Door = document.querySelector('input[name="Door"]:checked').value;
    const MaskingToggle = document.getElementById('Masking');
    const Masking = MaskingToggle.checked ? 'On' : 'Off';
    const image = document.querySelector('.img-receive-room-1');

    // Wall Type 1
    if (selectedRoom === 'receive-room-1' && Wall === '1&1' && Door === 'Sliding' && Masking === 'On') {
        image.src = 'Photos/S1SL-ON-1.png';
    } else if (selectedRoom !== 'receive-room-1' && Wall === '1&1' && Door === 'Sliding' && Masking === 'On') {
        image.src = 'Photos/U1SL-ON-1.png';
    } else if (selectedRoom === 'receive-room-1' && Wall === '1&1' && Door === 'Sliding' && Masking === 'OFF') {
        image.src = 'Photos/S1SL-OFF-1.png';
    } else if (selectedRoom !== 'receive-room-1' && Wall === '1&1' && Door === 'Sliding' && Masking === 'OFF') {
        image.src = 'Photos/U1SL-OFF-1.png';
    } else if (selectedRoom === 'receive-room-1' && Wall === '1&1' && Door !== 'Sliding' && Masking === 'ON') {
        image.src = 'Photos/S1SW-ON-1.png';
    } else if (selectedRoom !== 'receive-room-1' && Wall === '1&1' && Door !== 'Sliding' && Masking === 'ON') {
        image.src = 'Photos/U1SW-ON-1.png';
    } else if (selectedRoom === 'receive-room-1' && Wall === '1&1' && Door !== 'Sliding' && Masking === 'OFF') {
        image.src = 'Photos/S1SW-OFF-1.png';
    } else if (selectedRoom !== 'receive-room-1' && Wall === '1&1' && Door !== 'Sliding' && Masking === 'OFF') {
        image.src = 'Photos/U1SW-OFF-1.png';
    }
    // Wall type 2
    else if (selectedRoom === 'receive-room-1' && Wall === '1&2' && Door === 'Sliding' && Masking === 'On') {
        image.src = 'Photos/S2SL-ON-1.png';
    } else if (selectedRoom !== 'receive-room-1' && Wall === '1&2' && Door === 'Sliding' && Masking === 'On') {
        image.src = 'Photos/U2SL-ON-1.png';
    } else if (selectedRoom === 'receive-room-1' && Wall === '1&2' && Door === 'Sliding' && Masking === 'OFF') {
        image.src = 'Photos/S2SL-OFF-1.png';
    } else if (selectedRoom !== 'receive-room-1' && Wall === '1&2' && Door === 'Sliding' && Masking === 'OFF') {
        image.src = 'Photos/U2SL-OFF-1.png';
    } else if (selectedRoom === 'receive-room-1' && Wall === '1&2' && Door !== 'Sliding' && Masking === 'ON') {
        image.src = 'Photos/S2SW-ON-1.png';
    } else if (selectedRoom !== 'receive-room-1' && Wall === '1&2' && Door !== 'Sliding' && Masking === 'ON') {
        image.src = 'Photos/U2SW-ON-1.png';
    } else if (selectedRoom === 'receive-room-1' && Wall === '1&2' && Door !== 'Sliding' && Masking === 'OFF') {
        image.src = 'Photos/S2SW-OFF-1.png';
    } else if (selectedRoom !== 'receive-room-1' && Wall === '1&2' && Door !== 'Sliding' && Masking === 'OFF') {
        image.src = 'Photos/U2SW-OFF-1.png';
    }
    // Wall type 3
    else if (selectedRoom === 'receive-room-1' && Wall === '2&2' && Door === 'Sliding' && Masking === 'On') {
        image.src = 'Photos/S3SL-ON-1.png';
    } else if (selectedRoom !== 'receive-room-1' && Wall === '2&2' && Door === 'Sliding' && Masking === 'On') {
        image.src = 'Photos/U3SL-ON-1.png';
    } else if (selectedRoom === 'receive-room-1' && Wall === '2&2' && Door === 'Sliding' && Masking === 'OFF') {
        image.src = 'Photos/S3SL-OFF-1.png';
    } else if (selectedRoom !== 'receive-room-1' && Wall === '2&2' && Door === 'Sliding' && Masking === 'OFF') {
        image.src = 'Photos/U3SL-OFF-1.png';
    } else if (selectedRoom === 'receive-room-1' && Wall === '2&2' && Door !== 'Sliding' && Masking === 'ON') {
        image.src = 'Photos/S3SW-ON-1.png';
    } else if (selectedRoom !== 'receive-room-1' && Wall === '2&2' && Door !== 'Sliding' && Masking === 'ON') {
        image.src = 'Photos/U3SW-ON-1.png';
    } else if (selectedRoom === 'receive-room-1' && Wall === '2&2' && Door !== 'Sliding' && Masking === 'OFF') {
        image.src = 'Photos/S3SW-OFF-1.png';
    } else if (selectedRoom !== 'receive-room-1' && Wall === '2&2' && Door !== 'Sliding' && Masking === 'OFF') {
        image.src = 'Photos/U3SW-OFF-1.png';
    }
}

function changeRoom2Image(selectedRadio) {
    const selectedRoom = selectedRadio.value;
    const Door = document.querySelector('input[name="Door"]:checked').value;
    const MaskingToggle = document.getElementById('Masking');
    const Masking = MaskingToggle.checked ? 'On' : 'Off';
    const image = document.querySelector('.img-receive-room-2');

    if (selectedRoom === 'receive-room-2' && Door === 'Sliding' && Masking === 'On') {
        image.src = 'Photos/S1SL-ON-2.png';
    } else if (selectedRoom !== 'receive-room-2' && Door === 'Sliding' && Masking === 'On') {
        image.src = 'Photos/UASL-ON-2.png';
    } else if (selectedRoom === 'receive-room-2' && Door === 'Sliding' && Masking === 'OFF') {
        image.src = 'Photos/SASL-OFF-2.png';
    } else if (selectedRoom !== 'receive-room-2' && Door === 'Sliding' && Masking === 'OFF') {
        image.src = 'Photos/UASL-OFF-2.png';
    } else if (selectedRoom === 'receive-room-2' && Door !== 'Sliding' && Masking === 'ON') {
        image.src = 'Photos/SASW-ON-2.png';
    } else if (selectedRoom !== 'receive-room-2' && Door !== 'Sliding' && Masking === 'ON') {
        image.src = 'Photos/UASW-ON-2.png';
    } else if (selectedRoom === 'receive-room-2' && Door !== 'Sliding' && Masking === 'OFF') {
        image.src = 'Photos/SASW-OFF-2.png';
    } else if (selectedRoom !== 'receive-room-2' && Door !== 'Sliding' && Masking === 'OFF') {
        image.src = 'Photos/UASW-OFF-2.png';
    }    
}

function changeSourceImage(selectedRadio) {
    const selectedRoom = selectedRadio.value;
    const Wall = document.querySelector('input[name="Wall"]:checked').value;
    const Door = document.querySelector('input[name="Door"]:checked').value;
    const image = document.querySelector('.img-receive-room-1');
    
    if (selectedRoom === 'source-room' && Wall === '1&1' && Door === 'Sliding') {
        image.src = 'Photos/SASL-OFF-S.png';
    } else if (selectedRoom === 'source-room' && Wall === '1&2' && Door === 'Sliding') {
        image.src = 'Photos/SASL-OFF-S.png';
    } else if (selectedRoom === 'source-room' && Wall === '2&2' && Door === 'Sliding') {
        image.src = 'Photos/SASL-OFF-S.png';
    } else if (selectedRoom !== 'source-room' && Wall === '1&1' && Door === 'Sliding') {
        image.src = 'Photos/UASL-OFF-S.png';
    } else if (selectedRoom !== 'source-room' && Wall === '1&2' && Door === 'Sliding') {
        image.src = 'Photos/UASL-OFF-S.png';
    } else if (selectedRoom !== 'source-room' && Wall === '2&2' && Door === 'Sliding') {
        image.src = 'Photos/UASL-OFF-S.png';
    } else if (selectedRoom === 'source-room' && Wall === '1&1' && Door !== 'Sliding') {
        image.src = 'Photos/S1SL-OFF-S.png';
    } else if (selectedRoom === 'source-room' && Wall === '1&2' && Door !== 'Sliding') {
        image.src = 'Photos/S1SL-OFF-S.png';
    } else if (selectedRoom === 'source-room' && Wall === '2&2' && Door !== 'Sliding') {
        image.src = 'Photos/S1SL-OFF-S.png';
    } else if (selectedRoom !== 'source-room' && Wall === '1&1' && Door !== 'Sliding') {
        image.src = 'Photos/U1SL-OFF-S.png';
    } else if (selectedRoom !== 'source-room' && Wall === '1&2' && Door !== 'Sliding') {
        image.src = 'Photos/U1SL-OFF-S.png';
    } else if (selectedRoom !== 'source-room' && Wall === '2&2' && Door !== 'Sliding') {
        image.src = 'Photos/U1SL-OFF-S.png';
    }    
}


// Trying the cleaner code version
document.addEventListener('DOMContentLoaded', () => {
    const maskingToggle = document.getElementById('Masking');
    const wallRadios = document.querySelectorAll('input[name="Wall"]');
    const doorRadios = document.querySelectorAll('input[name="Door"]');
    const roomRadios = document.querySelectorAll('input[name="Room"]');

    // Add event listeners to all relevant inputs
    maskingToggle.addEventListener('change', updateImages);
    wallRadios.forEach(radio => radio.addEventListener('change', updateImages));
    doorRadios.forEach(radio => radio.addEventListener('change', updateImages));
    roomRadios.forEach(radio => radio.addEventListener('change', updateImages));

    function updateImages() {
        const selectedRoom1 = document.querySelector('input[name="Room"][value="receive-room-1"]').checked;
        const selectedRoom2 = document.querySelector('input[name="Room"][value="receive-room-2"]').checked;
        const selectedSourceRoom = document.querySelector('input[name="Room"][value="source-room"]').checked;
        const wall = document.querySelector('input[name="Wall"]:checked').value;
        const door = document.querySelector('input[name="Door"]:checked').value;
        const masking = maskingToggle.checked ? 'ON' : 'OFF';

        // Update Room 1 Image
        const room1Image = document.querySelector('.img-receive-room-1');
        room1Image.src = getRoom1Image(selectedRoom1, wall, door, masking);

        // Update Room 2 Image
        const room2Image = document.querySelector('.img-receive-room-2');
        room2Image.src = getRoom2Image(selectedRoom2, wall, door, masking);

        // Update Source Room Image
        const sourceImage = document.querySelector('.img-source-room');
        sourceImage.src = getSourceImage(selectedSourceRoom, wall, door);
    }

    function getRoom1Image(room, wall, door, masking) {
        if (room === 'receive-room-1') {
            return `Photos/S${wall}${door}-${masking}-1.png`;
        } else if (room !== 'receive-room-1') {
            return `Photos/U${wall}${door}-${masking}-1.png`;
        }
    }

    function getRoom2Image(room, door, masking) {
        if (room === 'receive-room-2') {
            return `Photos/SA${door}-${masking}-2.png`;
        } else if (room !== 'receive-room-2') {
            return `Photos/UA${door}-${masking}-2.png`;
        }
    }

    function getSourceImage(room, wall, door) {
        if (room === 'source-room' && door === 'SL') {
            return `Photos/SA${door}-OFF-S.png`;
        } else if (room !== 'source-room' && door === 'SL') {
            return `Photos/UA${door}-OFF-S.png`;
        } else if (room === 'source-room' && door === 'SW') {
            return `Photos/S${wall}${door}-OFF-S.png`;
        } else if (room !== 'source-room' && door === 'SW') {
            return `Photos/U${wall}${door}-OFF-S.png`;
        }
    }
});
