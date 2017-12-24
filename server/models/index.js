const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

// Create database connection string from environment variables
const sequelize = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}` +
  `@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
);

const db = {};

// Iterate through files in this directory to load all models
fs.readdirSync(__dirname)
.filter(file =>
  (file.indexOf('.') !== 0) && (file !== 'index.js')
)
.forEach((file) => {
  const model = sequelize.import(path.join(__dirname, file));
  db[model.name] = model;
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
