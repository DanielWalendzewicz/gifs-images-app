const express = require('express');
const fetch = require("node-fetch")
const app = express();

app.get('/api/pixabay/images/:searchName', (req, res) => {
    const PIXABAY_API_KEY = '14889733-4bb5090ae0616769590fb3907'
    const PIXABAY_API = 'https://pixabay.com/api/?key=' + PIXABAY_API_KEY;
    const updatedSearchName = '&q=' + req.params.searchName.replace(' ', '+');
    const API_URL = PIXABAY_API + updatedSearchName + '&image_type=photo';

    fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        res.send(data)
    })
});

app.get('/api/giphy/gifs/:searchName', (req, res) => {
    const GIPHY_API_KEY = 'NwImpGK5r6TWe03uHoKYAJy0huSSLuc2'
    const GIPHY_API = 'http://api.giphy.com/v1/gifs/search?';
    const updatedSearchName = '&q=' + req.params.searchName.replace(' ', '+');
    const resourcesLimit = '&limit=5'
    const API_URL = GIPHY_API + updatedSearchName + '&api_key=' + GIPHY_API_KEY + resourcesLimit;

    fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        res.send(data)
    })
});

app.listen(3000, () => console.log('Listening on port 3000..'))