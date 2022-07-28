const userNotesData = require('../db/db.json');
const uniqid = require('uniqid');
const fs = require('fs');
const { readFromFile, readAndAppend, writeToFile, } = require('../helpers/fsUtils');

module.exports = (app) => {
    // GET route for retrieving all notes 
    app.get('/api/notes', (req, res) => {
        readFromFile('../db/db.json').then((userNotesData) => res.json(userNotesData));
    });

    app.post('/api/notes', (req, res) => {
        console.log(req.body);

        const { title, text } = req.body;

        if (req.body) {
            const newNote = {
                title, 
                text, 
                id: uniqid(),
            };

            readAndAppend(newNote, './db/db.json');
            res.json(`New note added successfully`);
        } else {
            res.error(`Cannot add new note`);
        }
    });
}


// Generate helper function folder and write functions to readFile etc then link that page to top of page