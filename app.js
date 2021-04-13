const express = require('express');
const app = express();

const PORT = 3001;

app.get('/movies', (req,res) => {
    res.send('Bientot des films ici même !')
})

app.get('/movies/add', (req,res) => {
    res.send(`Bien*tot un formulaire d'ajout ici`)
})

app.get('/movies/:id', (req,res) => {
    const id = req.params.id;
    res.send(`Voici le film numéro ${id}`)
})

app.get('/', (req,res) => {
    res.send('hello world!!!!')
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});