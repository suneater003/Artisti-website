import express from 'express'

const galleryRoute = express.Router();

//Login Route
galleryRoute.get('/gallery', (req, res) => {
    res.render('../public/gallery')
})

export default galleryRoute;