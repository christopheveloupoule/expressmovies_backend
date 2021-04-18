const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

const PORT = 3009;
let frenchMovies = [];

//Chemin pour y accéder au fichier static (css)
app.use('/public' , express.static('public'));

const secret = 'qsdjS12ozehdoIJ123DJOZJLDSCqsdeffdg123ER56SDFZedhWXojqshduzaohduihqsDAqsdq';

app.use(expressJwt({ secret: secret, algorithms: ['HS256']}).unless({ path: ['/', '/movies', '/movie-search', '/login']}));

//Conf à faire pr utiliser notre template "engine"
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

//Fonction : récuperer du body et son contenu (les champs saisis ds le form)
//app.use(bodyParser.urlencoded({ extended: false }))

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
});

// create application/x-www-form-urlencoded parser
// https://github.com/expressjs/body-parser
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

//!\ In upload.fields([]), the empty array '[]' is required
app.post('/movies', upload.fields([]), (req,res) => {
    if(!req.body) {
        return res.sendStatus(500);
    } else {
        const formData = req.body;
        console.log('formData: ', formData);
        const newMovie = { title: formData.movietitle, year: formData.movieyear };
        // frenchMovies.push(newMovie); on modifie un tableau existant
        frenchMovies = [...frenchMovies, newMovie]; // on crée un nouveau []
        res.sendStatus(201);
    }
});


// app.get('/movie-details', (req,res) => {
//     res.render('movie-details');
// });

app.get('/movies/add', (req,res) => {
    res.send(`Bientot un formulaire d'ajout ici`);
});

app.get('/movies/:id', (req,res) => {
    const id = req.params.id;
    const title = req.params.title;
    // res.send(`Voici le film numéro ${id}`)
    res.render('movie-details', {movieid: id });
});

app.get('/movie-search', (req, res) => {
    res.render('movie-search');
});

app.get('/login', (req, res) => {
    res.render('login', { title: 'Espace membre'});
});

const fakeUser = { email: 'testuser@testmail.fr', password: '123456789' };

app.post('/login', urlencodedParser, (req, res) => {
    console.log('login post', req.body);
    if (!req.body) {
        return res.sendStatus(500);
    } else {        
        if(fakeUser.email === req.body.email && fakeUser.password === req.body.password) {
            /*res.json({ 
                        email: 'testuser@testmail.fr', 
                        favoriteMovie: 'PULP FICTION',
                        favoriteMovieTheater: 'Place Gaumont, 31000 Toulouse', 
                        lastLoginDate: new Date() 
                    });*/
            // iss means 'issuer'
            const myToken = jwt.sign({iss: 'http://expressmovies.fr', user: 'christophevelou', role: 'moderator'}, secret);
            console.log('myToken', myToken);
            res.json(myToken);
        } else {
            res.sendStatus(401);
        } 
    } 
});

app.get('/member-only',(req, res) => {
    console.log('req.user', req.user);
    res.send(req.user);
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});