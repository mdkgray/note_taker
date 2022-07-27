const express = require('express');
// const { request } = require('http');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Require routes for HTML and API
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// listen to port 
app.listen(PORT, () =>
    console.log(`Listening at PORT: ${PORT}`)
);