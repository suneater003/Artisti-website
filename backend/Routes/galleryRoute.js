import express from 'express'
import artworks from '../assets/artworks.json' assert {type: 'json'}

const galleryRoute = express.Router();

//Gallery Route
galleryRoute.get('/gallery', (req, res) => {
    res.render('../public/gallery', {modern: artworks.modern, portrait: artworks.portrait})
})

export default galleryRoute;