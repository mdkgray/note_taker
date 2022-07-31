const router = require('express').Router();
const path = require('path');

const fs = require('fs');

// Variable for db.json file
const userNotesDataFile = './db/db.json';

// variable for uniqid
const { v4: uuidv4 } = require('uuid');

// variable for helper functions in fsUtils file
const { readFromFile, readAndAppend, writeToFile, } = require('../helpers/fsUtils');

// GET route for retrieving all notes 
router.get('/notes', (req, res) => {
    readFromFile(userNotesDataFile).then((data) => res.json(JSON.parse(data)));
});

//GET route for a specific note
router.get('/notes/:id', (req, res) => {
    const noteId = req.params.id;

    readFromFile(userNotesDataFile)
     .then((data) => JSON.parse(data))
     .then((json) => {
        const newNotes = json.filter((note) => note.id === noteId);
        return result.length > 0
        ? res.json(newNotes) : res.json('No note with that id was found');
     });
});

// POST route for sending new note
router.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title, 
            text, 
            id: uuidv4(),
        };

        readAndAppend(newNote,userNotesDataFile);
        res.json(`New note added successfully`);
    } else {
        res.error(`Cannot add new note`);
    }
});

// DELETE route for deleting a note
router.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;

    readFromFile(userNotesDataFile)
        .then((data) => JSON.parse(data))
        .then((json) => {

        const newNotes = json.filter((note) => note.id !== noteId);

        writeToFile(userNotesDataFile, newNotes);

        res.json(`Note ${noteId} deleted successfully`);            
    });
});

module.exports = router;
