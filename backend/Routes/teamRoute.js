import express from 'express'
import members from '../assets/team.json' assert {type: 'json'}
const teamRoute = express.Router();

//Teams Route
teamRoute.get('/team', (req, res) => {
    res.render('../public/team', {members1: members.row1, members2: members.row2})
})

export default teamRoute;