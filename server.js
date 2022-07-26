const express = require('express');
// const { request } = require('http');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// GET route for homepage
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET route for notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// listen to port 
app.listen(PORT, () =>
    console.log(`Listening at http://localhost:${PORT}`)
);

// Is it better to have this or keep the above  GET routes?
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);