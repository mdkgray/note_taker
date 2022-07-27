const express = require('express');
const path = require('path');

module.exports = (app) => {
    app.use(express.static('public'));
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
        console.log("GET Request Called for /notes endpoint")
    });
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
        console.log("GET Request Called for root endpoint")
    });
}