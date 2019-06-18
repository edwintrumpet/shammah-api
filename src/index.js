const express = require('express');
const morgan = require('morgan');
const { SERVER_PORT } = require('../config');

const app = express();

// Middlewares
app.use(morgan('dev'));

// Routes
require('./routes')(app);

// Server online
app.listen(SERVER_PORT, () => {
    console.log(`Server on port ${SERVER_PORT}`);
});