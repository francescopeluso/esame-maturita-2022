// Francesco Peluso - Year 2022
// High School Final Exam Website

const express = require('express');
const ejs = require('ejs')
const app = express();

// declare static assets location
app.use(express.static('public'));

// declare css files location
app.use('/css', express.static(__dirname + '/css'));
app.use('/fonts', express.static(__dirname + '/fonts'));

// declare file to use as favicon
app.use('/favicon.ico', express.static('favicon.ico'));

// handling GET requests
app.get('/', function(req, res) {
    res.render(__dirname + '/views/index.ejs');
});

// HTTP 404 Error (Not found)
app.use(function(req, res, next) {
    res.status(404).sendFile(__dirname + '/404.html');
});

// Start ExpressJS web server on http://localhost:8080/
app.listen(8080, () => {
    console.log("Server running on port 8080");
})