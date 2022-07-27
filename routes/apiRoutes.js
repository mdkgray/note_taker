const userNotesData = require('../db/db.json');
const uniqid = require('uniqid');
const fs = require('fs');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(userNotesData));

}