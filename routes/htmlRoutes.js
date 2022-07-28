const express = require('express');
const path = require('path');

module.exports = (app) => {
    app.use(express.static('public'));

    //GET route for notes.html page
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
        console.log(`${req.method} request received`);
    });

    // wildcard GET route to direct users to index.html page 
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
        console.log(`${req.method} request received`);
    });
}