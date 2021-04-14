Résumé:

Créer une application web à l'aide de Node.js et Express.js et la sécuriser à l’aide de JWT (JSON Web Token). Notamment créer plusieurs pages, naviguer d'une page à l'autre, créer des formulaires et poster des données, effectuer des requêtes vers des API REST, et à faire du CRUD vers une base MongoDB à l'aide de Mongoose.

I Routage en détail
* Ajout de paramètre à une route | Importance de l'ordre des routes

II View Engines (moteurs de vues)

* Créer un template à l'aide de EJS (module) : npm install ejs --save
Pr utiliser un template dans l'app on utilise la méthode "render"
Pour utiliser le fichier style.css, on aura recours à un middleware (app.use) car le css est un fichier statique

* Pratiquer l'utilisation de template:
Par exemple on crée, movie detail.ejs ...

* Passer des données de l'appli JS à une vue (movie-details):
On passe un 2eme param à la méthode render de app.get('/movies/:id'...

* Gestion des partials (footer header)


