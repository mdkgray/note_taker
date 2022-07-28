const router = require('express').Router();
const fs = require('fs');
// Variable for db.json file
const userNotesData = require('../db/db.json');

// variable for uniqid
const uniqid = require('uniqid');

// variable for helper functions in fsUtils file
const { readFromFile, readAndAppend, writeToFile, } = require('../helpers/fsUtils');

// GET route for retrieving all notes 
router.get('/api/notes', (req, res) => {
    readFromFile('../db/db.json').then((userNotesData) => res.json(userNotesData));
});

// POST route for sending new note
router.post('/api/notes', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title, 
            text, 
            id: uniqid(),
        };

        readAndAppend(newNote, '../db/db.json');
        res.json(`New note added successfully`);
    } else {
        res.error(`Cannot add new note`);
    }
});

// DELETE route for deleting a note
router.delete('/api/notes/:id', (req, res) => {
    const noteId = req.params.id;

    readFromFile('../db/db.json')
        .then((userNotesData) => JSON.parse(userNotesData))
        .then((json) => {

        const newNotes = json.filter((note) => note.id !== noteId);

        writeToFile('../db/db.json', newNotes);

        res.json(`Note ${noteId} deleted successfully`);            
    });
});

module.exports = router;
