// Dependency Imports ----------------------------------------------------------
import bodyParser from 'body-parser';
import express from 'express';
import http from 'http';
import morgan from 'morgan';
import path from 'path';
import webpack from 'webpack';

// Backend Imports -------------------------------------------------------------
import api from './api/index';
import routes from './routes/index';
import log from './utils/log';
import models from './models/index';

// Server Initialization -------------------------------------------------------
const app = express();
const server = http.Server(app);

// Middleware ------------------------------------------------------------------
app.use(morgan('dev'));
if (process.env.NODE_ENV === 'development') {
  // Compile webpack as necessary in development
  const config = require('./../webpack.dev.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    quiet: false,
    stats: 'errors-only',
    publicPath: config.output.publicPath,
    headers: { 'Cache-Control': 'no-cache' },
  }));
} else if (process.env.NODE_ENV === 'production') {
  // Use pre-compiled bundle.js and style.css in production
  app.use('/build', express.static(path.join(__dirname, '..', 'build'), {
    maxAge: 360000,
  }));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Express Routes --------------------------------------------------------------
const router = express.Router();
router.use('/api', api);
router.use('/', routes);
app.use(router);

// Connect to Database ---------------------------------------------------------
models.sequelize.authenticate()
.then(() => {
  // Start Server --------------------------------------------------------------
  server.listen(process.env.PORT, () => {
    log.info(`Server listening on port ${process.env.PORT}.`);
  });
})
.catch(err => log.error('Unable to connect to the database:', err));

process.on('SIGTERM', () => {
  server.close(() => {
    models.sequelize.close(() => {
      process.exit(0);
    });
  });
});
