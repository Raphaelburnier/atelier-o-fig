// Toujours commencer par importer les variables d'environnement !
require('dotenv').config();
const path = require('path');
const express = require('express');

// on importe le router
const router = require('./app/router');


// un peu de config
const PORT = process.env.PORT || 5000;


const app = express();

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs')

// servir les fichiers statiques qui sont dans "integration"
app.use(express.static('integration'));

// routage !
app.use(router);


// on lance le serveur
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
