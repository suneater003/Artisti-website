import express from 'express'
import bp from'body-parser'

const app = express();

const PORT = process.env.PORT || 3000

//setting up viewport for ejs
app.set('view engine', 'ejs');

//loading static asssets
app.use(express.static("./public"))

app.use(bp.json());
app.use(bp.urlencoded({extended: false}))

//home route
app.get('/', (req, res) => {
    res.render('../public/base');
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
