const router = require('express').Router();
const path = require('path');
        
//GET route for notes.html page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
    console.log(`${req.method} request received`);
});

// wildcard GET route to direct users to index.html page 
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
    console.log(`${req.method} request received`);
});

module.exports = router;