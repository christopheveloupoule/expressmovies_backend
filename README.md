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

IV.API: Requeter une API REST grandeur nature
****************************************************************

* Presentation API de 'The Movie DB':
51337e213f1f1eb7dd3d7150e177a88a

* Faire une requete à l'aide de axios:
Ajout movie-search.ejs et le link sur le header.ejs
Utilisation d'un CDN pour Axios

* Parser les résultats et les intégrer ds une page web

V.JSON WEB TOKEN (JWT) - 1ere partie:

* Création d'une page login.ejs et gestion du GET et du POST dans le app.js

* Générer un TOKEN et l'envoyer en réponse à un client:
npm install --save jsonwebtoken
Method 'sign' dans la doc

* Sauvegarder notre token dans localStorage

* Modifier la vue en fonction de la présence d'un TOKEN:
function switchTLoggedinMode | function switchToLoggedOutMode | function disconnect

* Ajouter un lienvers la page de connexion:
/login dans le header.js

* Détecter le moment ou le DOM est prêt:
Modife du footer.ejs, on invoque immédiatement un function expression

* Gérer l'affichage du formulaire en fonction de la présence d'un token:
var connectionLinkArea = document.querySelector ('#connectionLink');

VI.JSON WEB TOKEN (JWT) - 2eme partie:

* Decoder un JWT:
Méthod native de JS pr décoder décoder notre payload
function displayPayload | function parseJwt 

* Protéger l'accès à certaines routes coté serveur:
Utilisation d'un middleware: npm install express-jwt --save
Method unless pour ne pas protéger la page login d'un token (doc)

* Ajouter un 'Authorization' header

* Ajouter un 'Authorization' header depuis notre code:
Utilisation de axios
On va rajouter une ressource qui sera elle protégée.(member-only)

















