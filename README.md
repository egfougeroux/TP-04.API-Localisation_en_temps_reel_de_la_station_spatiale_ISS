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
Conformément aux consignes du sujet :
- **Données géodésiques de l'ISS :** [Open Notify API](http://api.open-notify.org/iss-now.json)
- **Fonds cartographiques :** [OpenStreetMap](https://www.openstreetmap.org/copyright)
- **Documentation et sources scientifiques :** [Agence Spatiale Européenne (ESA)](https://www.esa.int/)
- **Icône ISS :** [Wikimedia Commons - International Space Station SVG](https://commons.wikimedia.org/wiki/File:International_Space_Station.svg) (Licence Creative Commons CC BY-SA 4.0)
- **Plugin Fullscreen :** [Leaflet.fullscreen par Mapbox](https://github.com/Leaflet/Leaflet.fullscreen)

## Déploiement
- Projet disponible sur la machine virtuelle à l'adresse : `http://<IP-DE-TA-VM>/...`
