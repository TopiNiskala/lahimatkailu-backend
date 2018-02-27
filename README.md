# geoprojekti
Haaga-Helia ohjelmistoprojekti 2 kurssin projektin backend

## Ennen käyttöä
Aja seuraava komento:
```
npm install
```
Hanki Google Maps Geocoding API -avain [täältä](https://developers.google.com/maps/documentation/geocoding/start#get-a-key) ja muuta config.js-tiedostosta tyhjä avain omaksesi:
```
config.googleMapsApiKey = "[avain]"
```

## Käyttö
MongoDB:n pitää olla käynnissä.
```
npm start
```
* Kohteen lisäys: http://localhost:3000/v1/new
* Kohteen muokkaus: http://localhost:3000/v1/modify/[id]
* Kohteiden JSON: http://localhost:3000/v1/kohteet.json
* Kohteen poisto http://localhost:3000/v1/delete/[id]
