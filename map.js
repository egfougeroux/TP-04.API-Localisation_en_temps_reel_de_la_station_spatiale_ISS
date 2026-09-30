// Avant, on définit la vue de la carte
// fullscreenControl: true permet d'activer le plein écran demandé
var map = L.map('map', {
    fullscreenControl: true
}).setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Définition de l'icône personnalisée pour l'ISS
var issIcon = L.icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/International_Space_Station.svg',
    iconSize: [50, 32],
    iconAnchor: [25, 16],
    popupAnchor: [0, -16]
});

// Variable pour mémoriser le marqueur unique
var marker = null;

// Récupération des données de l'API
const url = "http://api.open-notify.org/iss-now.json";

function updateISS() {
    fetch(url)
    .then( 
        (response) => response.json()
        .then(
        // Affichage du contenu transformé en JSON
            (datas) => {
                // Affichage dans la console
                console.table(datas.iss_position.latitude);
                console.table(datas.iss_position.longitude);

                var lat = datas.iss_position.latitude;
                var lon = datas.iss_position.longitude;
                var popupContent = "Latitude : " + lat + "<br>Longitude : " + lon;

                // Si le marqueur n'existe pas encore, on le crée
                if (marker === null) {
                    marker = L.marker([lat, lon], { icon: issIcon }).addTo(map);
                    marker.bindPopup(popupContent).openPopup();
                } else {
                    // Sinon, on met à jour sa position et son popup
                    marker.setLatLng([lat, lon]);
                    marker.setPopupContent(popupContent);
                }
            }
        )
    )
    .catch( (error) => {
        console.error('Erreur réseau ou technique :', error);
    });
}

// Premier appel dès le lancement
updateISS();

// Mise à jour régulière toutes les 15 secondes
setInterval(updateISS, 15000);