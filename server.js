const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

// Get environment variables
require('dotenv').config();

// Initialise express app
const app = express();

//Use CORS middleware
app.use(cors());
// Use JSON bodyparser
app.use(express.json());

// Use morgan middleware
if (process.env.NODE_ENV !== 'production') {
    app.use(require('morgan')('tiny'));
}
// Connect to mongodb
const { MONGO_URI } = process.env;

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
    .then(() => console.log('Connected to mongodb'))
    .catch(err => console.error(err));

// Use api routes
app.use('/api/todos', require('./routes/api/todos'));

// Serve react build when in produciton mode
if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')));
}

// Get port from environment
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
