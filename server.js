const express = require('express');

require('dotenv').config(); // Get environment variables
// Initialise app
const app = express();

// Add JSON body parser
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/todos', require('./routes/api/todos'));

// Get port from environment
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
