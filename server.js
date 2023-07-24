const express = require('express');
const routes = require('./routes');
// import sequelize connection
const Sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Sync sequelize models to the database
Sequelize.sync({ force: false }).then(() => {
  // Start the server after syncing the models
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});