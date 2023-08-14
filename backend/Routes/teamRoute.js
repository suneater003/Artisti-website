import express from 'express'
import { readFileSync } from "fs";
const members = JSON.parse(readFileSync("backend/assets/team.json"));
const teamRoute = express.Router();

//Teams Route
teamRoute.get('/team', (req, res) => {
    res.render('../public/team', {members1: members.row1, members2: members.row2, members3: members.row3})
})

export default teamRoute;