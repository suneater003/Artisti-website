import express from 'express'

const contactRoute = express.Router();

//Contact Route
contactRoute.get('/contact', (req, res) => {
    res.render('../public/contact')
})

export default contactRoute;