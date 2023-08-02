import express from 'express'
import { readFileSync } from "fs";
const artworks = JSON.parse(readFileSync("backend/assets/artworks.json"));

const galleryRoute = express.Router();

//Gallery Route
galleryRoute.get('/gallery', (req, res) => {
    res.render('../public/gallery', {modern: artworks.modern, portrait: artworks.portrait})
})

export default galleryRoute;