import express from "express";
import response from "../database/Model/form.js";
const formRouter = express.Router()

formRouter.use(express.json());
formRouter.post('/contact/response', (req, res) => {
    const name = req.body[0][1]
    const email = req.body[1][1]
    const institute = req.body[2][1]
    const country = req.body[3][1]
    const msg = req.body[4][1]
    
    const newResponse = new response({
        name: name,
        email: email,
        institute: institute,
        country: country,
        msg: msg
    })

    try{
        newResponse.save()
        res.send({success: true});
    }
    catch(err){
        res.send({success: false});    
    }
})

export default formRouter;