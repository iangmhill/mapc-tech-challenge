const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '../..', 'settings.env') });

const models = require('./../models/index');

models.Voter.sync({ force: true });
