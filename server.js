const express = require('express');
const path = require('path');

// Get environment variables
require('dotenv').config();

// Initialise express app
const app = express();

// Add JSON body parser
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')));
} else {
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
}

app.use('/api/todos', require('./routes/api/todos'));

// Get port from environment
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
