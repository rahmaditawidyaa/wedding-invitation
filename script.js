function RSVP() {
    document.getElementById('rsvp-form').style.display = 'block';
}

function closeRSVP() {
    document.getElementById('rsvp-form').style.display = 'none';
}

document.getElementById('rsvp').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Simpan data RSVP di LocalStorage (sebagai pengganti backend)
    let rsvps = JSON.parse(localStorage.getItem('rsvps')) || [];
    rsvps.push({ name, email });
    localStorage.setItem('rsvps', JSON.stringify(rsvps));

    alert('Terima kasih sudah mengonfirmasi kehadiran!');
    closeRSVP();
});

function initMap() {
    const location = { lat: -6.200000, lng: 106.816666 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
