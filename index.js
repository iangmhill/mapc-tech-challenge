const dotenv = require('dotenv');
const path = require('path');
require('babel-register');
require('babel-polyfill');

// Load environment variables from file
if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: path.join(__dirname, 'settings.env') });
}
// Launch the Express server
require('./server/server');
