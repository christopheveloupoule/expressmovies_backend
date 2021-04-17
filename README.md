Résumé:

Créer une application web à l'aide de Node.js et Express.js et la sécuriser à l’aide de JWT (JSON Web Token). Notamment créer plusieurs pages, naviguer d'une page à l'autre, créer des formulaires et poster des données, effectuer des requêtes vers des API REST, et à faire du CRUD vers une base MongoDB à l'aide de Mongoose.

I Routage en détail
**************************************************************************
* Ajout de paramètre à une route | Importance de l'ordre des routes


II View Engines (moteurs de vues)
***************************************************************************

* Créer un template à l'aide de EJS (module) : npm install ejs --save
Pr utiliser un template dans l'app on utilise la méthode "render"
Pour utiliser le fichier style.css, on aura recours à un middleware (app.use) car le css est un fichier statique

* Pratiquer l'utilisation de template:
Par exemple on crée, movie detail.ejs ...

* Passer des données de l'appli JS à une vue (movie-details):
On passe un 2eme param à la méthode render de app.get('/movies/:id'...

* Gestion des partials (footer header)

* Gestion de l'envoi de fichier statique (on applique simplement une classe CSS separation avec le footer)

* Passer des données complexes à une vue et itérer côté template
ex: via un tableau d'objet. Il faut passer le [] au template via le res.render(Nom template,les données )
On pourra passer également un titre via la const title
On va itérer sur un []

III.FORMULAIRES
***************************************************************************

* Créer un formulaire et gérer le POST: 
Installer le middleware charger de récupérer le body d'une requete via "Bodyparser"

npm install --save body-parser

Pour l'instant body-parser s'applique à toute les requêtes.
Pour l'appliquer à une route spécifique, on passe le "urlencoded" en 2eme paramètre de la route app.post et on passe en comment:
"app.use(bodyParser.urlencoded({ extended: false }))" en haut de liste

* Récupérer le body d'une requête  via n middleware body-parser:
On recupe granuleremet via le req.body

* Gerer la persistance en mémoire: 
On va déclarer la méthode "frenchMovies en dehors de la méthode app.get

* Poster un formulaire Ajax : Pour ne pas que la page soit recharger en postant le form
Avec le fetch, on va faire du POST
On va utiliser "multer", un middleware pr recupérer les données.

* Poster un formulaire via le middleware "multer":
npm install --save multer, pour POST les le form via les photos par ex...








