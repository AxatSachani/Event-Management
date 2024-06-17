const mongoose = require('mongoose');
const dbURL = 'mongodb://127.0.0.1:27017/events'

mongoose.connect(dbURL)
    .catch(err => {
        console.log('database not connected!. Error: ' + err);
    })
    .then(() => {
        console.log('database connected');
        // attach all models schema
        require('./index')
    })