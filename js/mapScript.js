var customIcon = L.icon({
  iconUrl: 'assets/images/49405-removebg-preview.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -25]
});

var map = L.map('map').setView([51.285923589249514, 4.414530446245566], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.285923589249514, 4.414530446245566], { icon: customIcon }).addTo(map);
marker.bindPopup("Board Elegance").openPopup();



const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {
  window.open("https://youtu.be/dQw4w9WgXcQ?si=i91z5Gd-dYToth9c"); 
});