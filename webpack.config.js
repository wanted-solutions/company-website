const path = require('path');

module.exports = {
  mode: 'development', // Pro vývoj, změňte na 'production' pro finální build
  entry: './assets/js/main.js', // Hlavní vstupní bod vašich JS souborů
  output: {
    path: path.resolve(__dirname, 'dist'), // Cílová složka pro sestavené soubory
    filename: 'bundle.js', // Název sestaveného JS souboru
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Pravidlo pro zpracování CSS souborů
        use: ['style-loader', 'css-loader'],
      },
      // Zde můžete přidat další pravidla pro zpracování jiných typů souborů
    ],
  },
};
