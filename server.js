const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const app = express();

//Middleware
app.use(cors());
require('dotenv').config();

// Configure body parsing for AJAX requests
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Serve up static assets (For heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
//Mongoose Connection
const uri = process.env.MONGO_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established');
});

//ROUTES Created in the Routes folder are used here
app.use(routes);

//Express Server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT} at http://localhost:${PORT}`)
});
