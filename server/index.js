const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

//Logging Middleware
app.use(morgan('dev'));

//BodyParsing Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Static Middleware
app.use(express.static(path.join(__dirname, '..', '/public')));

//Route to APIs
app.use('/api', require('./api'));

//Static HTML For When No API Route Matches
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '/public'));
});

//Handles 500 Errors
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server Error. Our bad!');
});

module.exports = app