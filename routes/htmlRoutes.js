const express = require('express');
const path = require('path');

module.exports = (app) => {
    app.use(express.static('public'));
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
        console.log(`${req.method} request received`);
    });
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
        console.log(`${req.method} request received`);
    });
}