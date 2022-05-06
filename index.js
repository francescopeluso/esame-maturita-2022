// Francesco Peluso - Year 2022
// High School Final Exam Website

const express = require('express');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');
const { json } = require('express');
const app = express();

// declare static assets location
app.use(express.static('public'));

// declare css files location
app.use('/css', express.static(__dirname + '/css'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/content', express.static(__dirname + '/content'));

// declare file to use as favicon
app.use('/favicon.ico', express.static('favicon.ico'));

// handling GET requests
app.get('/', (req, res) => {
    res.render(__dirname + '/views/index.ejs');
});

app.get('/italiano', (req, res) => {
    let file = require('./content/italiano.json');
    res.render(__dirname + '/views/essay.ejs', {file: file});
});

app.get('/inglese', (req, res) => {
    let file = require('./content/inglese.json');
    res.render(__dirname + '/views/essay.ejs', {file: file});
});

// HTTP 404 Error (Not found)
app.use((req, res, next) => {
    res.status(404).send("unavailable");
});

// Start ExpressJS web server on http://localhost:8080/
app.listen(8080, () => {
    console.log("Server running on port 8080");
})