import express from 'express'
import bp from'body-parser'
import galleryRoute from './Routes/galleryRoute.js';
import teamRoute from './Routes/teamRoute.js';
import Connection from './database/db.js';
import membersRoute from './Routes/members.js';
import contactRoute from './Routes/contactRoute.js';
import formRouter from './Routes/formRoute.js';
const app = express();

const PORT = process.env.PORT || 3000

//setting up viewport for ejs
app.set('view engine', 'ejs');

//loading static asssets
app.use(express.static("./public"))

app.use(bp.json());
app.use(bp.urlencoded({extended: false}))

// Home route
app.get('/', (req, res) => {
    res.render('../public/base');
})

app.use('/', formRouter)

// Gallery Route
app.get('/gallery', galleryRoute);

// Member Route

app.get('/members', membersRoute)

// Team Route
app.get('/team', teamRoute);

// Contact Route
app.get('/contact', contactRoute);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
    Connection();
})
