const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();


const PORT = 3000;
let frenchMovies = [];

//Chemin pour y accéder au fichier static (css)
app.use('/public' , express.static('public'))

//Fonction : récuperer du body et son contenu (les champs saisis ds le form)
//app.use(bodyParser.urlencoded({ extended: false }))

//Conf à faire pr utiliser notre template "engine"
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/movies', (req,res) => {
    //res.send('Bientot des films ici même !')

    const title = 'Les meilleurs films français des 30 dernières années'

    frenchMovies = [
        { title: ' La grande vadrouille ', year: 1978},
        { title: ' Intouchable ', year: 2014},
        { title: ' Le diner de cons', year: 1998},
        { title: ' Leon', year: 2000}
    ]
    res.render('movies', {movies: frenchMovies, title: title});
})

var urlencodedParser = bodyParser.urlencoded({ extended: false });

/*app.post('/movies', urlencodedParser, (req,res) => {
    console.log('le titre: ',req.body.movietitle);
    console.log('année: ',req.body.movieyear);
    const newMovie = { title: req.body.movietitle, year: req.body.movieyear };
   // frenchMovies.push(newMovie); on modifie un tableau existant
   frenchMovies = [...frenchMovies, newMovie]; // on crée un nouveau []
   console.log(frenchMovies);

    res.sendStatus(201);
})*/

app.post('/movies', upload.fields([]), (req,res) => {
    if(!req.body) {
        return res.sendStatus(500);
    }else {
        const formData = req.body;
        console.log('formData: ', formData);
        const newMovie = { title: req.body.movietitle, year: req.body.movieyear };
        // frenchMovies.push(newMovie); on modifie un tableau existant
        frenchMovies = [...frenchMovies, newMovie]; // on crée un nouveau []
        res.sendStatus(201);
    }
})


// app.get('/movie-details', (req,res) => {
//     res.render('movie-details');
// });

app.get('/movies/add', (req,res) => {
    res.send(`Bientot un formulaire d'ajout ici`);
})

app.get('/movies/:id', (req,res) => {
    const id = req.params.id;
    const title = req.params.title;
    // res.send(`Voici le film numéro ${id}`)
    res.render('movie-details', {movieid: id });
})

app.get('/', (req,res) => {
    //res.send('hello world!!!!');
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});