# TP - 04. API - Localisation en temps réel de la station spatiale ISS

**Nom :** Emma-Gabrielle FOUGEROUX <br>
**Classe :** BTS SIO SLAM2 <br>
**Date :** 29/09/2026

---

La station spatiale internationale se déplace à une vitesse d'environ 28 000 km/h à 400 km d'altitude. L'objectif de ce TP est d'interroger une API publique pour récupérer ses coordonnées géographiques en direct et de mettre à jour son positionnement dynamique sur un planisphère interactif sans recharger la page.

---

## Fonctionnalités
- **Visualisation cartographique :** intégration d'un planisphère interactif avec la bibliothèque Leaflet.
- **Requête API asynchrone :** interrogation de l'API Open Notify à l'aide de l'API Fetch de JavaScript.
- **Actualisation en direct :** mise à jour automatique des coordonnées toutes les 15 secondes via un minuteur (`setInterval`).
- **Marqueur personnalisé :** utilisation d'une icône dédiée représentant l'ISS, avec déplacement fluide du marqueur existant via `setLatLng()`.
- **Informations contextuelles :** affichage d'une infobulle (*popup*) indiquant la latitude et la longitude exactes de la station.
- **Mode plein écran :** intégration du plugin Leaflet Fullscreen pour étendre la carte.

## Sources et Crédits
Conformément aux consignes du sujet :
- **Données géodésiques de l'ISS :** [Open Notify API](http://api.open-notify.org/iss-now.json)
- **Fonds cartographiques :** [OpenStreetMap](https://www.openstreetmap.org/copyright)
- **Documentation et sources scientifiques :** [Agence Spatiale Européenne (ESA)](https://www.esa.int/)
- **Icône ISS :** [Wikimedia Commons - International Space Station SVG](https://commons.wikimedia.org/wiki/File:International_Space_Station.svg) (Licence Creative Commons CC BY-SA 4.0)
- **Plugin Fullscreen :** [Leaflet.fullscreen par Mapbox](https://github.com/Leaflet/Leaflet.fullscreen)

## Déploiement
- Projet disponible sur la machine virtuelle à l'adresse : `http://<IP-DE-TA-VM>/...`
