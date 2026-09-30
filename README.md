# TP - 04. API - Localisation en temps réel de la station spatiale ISS

**Nom :** Emma-Gabrielle FOUGEROUX <br>
**Classe :** BTS SIO SLAM2 <br>
**Date :** 29/09/2026

---

Ce projet permet de visualiser en direct la trajectoire et la position de la Station Spatiale Internationale (ISS) sur une carte interactive.

## Fonctionnalités
- Affichage de la carte interactive centrée sur le globe.
- Récupération en temps réel des coordonnées GPS de l'ISS toutes les 15 secondes.
- Marqueur personnalisé avec icône spatiale et popup indiquant la latitude et longitude exactes.
- Bouton plein écran (Plugin Leaflet Fullscreen).

## Sources et Crédits
- **Données API :** [Open Notify](http://api.open-notify.org/iss-now.json)
- **Cartographie :** [Leaflet](https://leafletjs.com/) & [OpenStreetMap](https://www.openstreetmap.org/)
- **Plugin Plein Écran :** [Leaflet.fullscreen](https://github.com/Leaflet/Leaflet.fullscreen)
- **Style CSS :** [Bootstrap 5](https://getbootstrap.com/)
- **Icône ISS :** [Wikimedia Commons - International Space Station SVG](https://commons.wikimedia.org/wiki/File:International_Space_Station.svg) (Licence Creative Commons).

## Déploiement
- Projet disponible sur la machine virtuelle à l'adresse : `http://<IP-DE-TA-VM>/...`
