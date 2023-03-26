import express from 'express'

const teamRoute = express.Router();

//Teams Route
teamRoute.get('/team', (req, res) => {
    res.render('../public/team')
})

export default teamRoute;