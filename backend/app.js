require('dotenv').load();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 8550;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URI);

let db = mongoose.connection;

// Check connection
db.once('open', () => console.log('Connected to MongoDB!'));

// Check for DB errors
db.on('error', (err) => console.log(err));

// Route Files
app.use('/items', require('./routes/items'));

// Launch the server on customized port
const server = app.listen(port, () => console.log(`Listening at http://${server.address().address}:${port}`));