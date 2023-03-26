import express from 'express'
import bp from'body-parser'
import galleryRoute from './Routes/galleryRoute.js';
import teamRoute from './Routes/teamRoute.js';

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

// Gallery Route
app.get('/gallery', galleryRoute);

// Team Route
app.get('/team', teamRoute);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
