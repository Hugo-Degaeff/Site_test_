// Map

var map = L.map('map').setView([45.45038208825396, 4.386994469291439], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([45.45038208825396, 4.386994469291439]).addTo(map)
    .bindPopup('OROSAND')
    .openPopup();