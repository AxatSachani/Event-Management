const normalizedPath = require('path').join(__dirname, '../models');
require('fs').readdirSync(normalizedPath).forEach(file => require('../models/' + file))