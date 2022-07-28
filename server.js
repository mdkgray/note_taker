const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//variable for PORT
const PORT = process.env.PORT || 3001;

const app = express();

// code for middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// listen to port 
app.listen(PORT, () => {
    console.log(`Listening at PORT: ${PORT}`)
});