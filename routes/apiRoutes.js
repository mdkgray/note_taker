const userNotesData = require('../db/db.json');
const uniqid = require('uniqid');
const fs = require('fs');
const { readFromFile, readAndAppend, writeToFile, } = require('../helpers/fsUtils');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(userNotesData));

    app.post('/api/notes', (req, res) => {
        req.body['id'] = uniqid();
        userNotesData.push(req.body);
        res.json(true);
        fs.writeFileSync('./db/db.json', JSON.stringify(userNotesData));

        console.log(`${req.method} request received`);

        res.json(`${req.method} request received`);
    });
}


// Generate helper function folder and write functions to readFile etc then link that page to top of page