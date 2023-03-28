import express from 'express'
import member from '../database/Model/schema.js';

const membersRoute = express.Router();

membersRoute.get('/members', async (req, res) => {
    const newUser = await member.find().exec()
    try {
        console.log(newUser)
    } catch (err) {
        console.log(err)
        res.status(400).send("SERVER ERROR. Contact the Developer")
    }
})
export default membersRoute;