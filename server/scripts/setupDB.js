const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '../..', 'settings.env') });

const models = require('./../models/index');

// Destroy the voters table and recreate the table according to the voterModel
models.Voter.sync({ force: true });
