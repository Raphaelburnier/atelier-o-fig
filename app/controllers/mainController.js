const path = require('path');
const dataMapper = require('../dataMapper');

const mainController = {

  // méthode pour la page d'accueil

  
  async homePage (request, response) {     
    
    const filePath = path.resolve(__dirname + '/../views/accueil.ejs');
  try{
      const figurine = await dataMapper.getAllFigurines();
      response.render(filePath, {figurine});
    }
    catch(e){
      console.log(e);
      response.status(500).send(`Error: ${e}`);
    
    }
  },

  // méthode pour la page article
  articlePage: (request, response) => {
    const filePath = path.resolve(__dirname + '/../../integration/article.html');
    response.sendFile(filePath);
  }

};


module.exports = mainController;
