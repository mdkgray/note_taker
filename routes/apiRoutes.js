const userNotesData = require('../db/db.json');
const uniqid = require('uniqid');
const fs = require('fs');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(userNotesData));

    app.post('./api/notes', (req, res) => {
        req.body['id'] = uniqid();
        userNotesData.push(req.body);
        res.json(true);
        fs.writeFileSync('./db/db.json', JSON.stringify(userNotesData));
    });
}