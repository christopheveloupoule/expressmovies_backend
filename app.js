const express = require('express');
const app = express();

const PORT = 3002;

//Chemin pour y accéder au fichier static (css)
app.use('/public' , express.static('public'))

//Conf à faire pr utiliser notre template "engine"
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/movies', (req,res) => {
    //res.send('Bientot des films ici même !')
    res.render('movies');
})

// app.get('/movie-details', (req,res) => {
//     res.render('movie-details');
// });

app.get('/movies/add', (req,res) => {
    res.send(`Bien*tot un formulaire d'ajout ici`);
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