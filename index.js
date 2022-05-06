// Francesco Peluso - Year 2022
// High School Final Exam Website

// requiring modules from npm and creating epxress app instance

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

// index page
app.get('/', (req, res) => {
    res.render(__dirname + '/views/index.ejs');
});

// exam arguments pages
app.get('/argomento', (req, res) => {
    let materia = req.query.materia;
    if (materia === undefined) {
        res.status(404).render(__dirname + '/views/404.ejs');
    } else {
        // check if the file exists
        fs.access(__dirname + '/content/' + materia + '/' + materia + '.json', (err) => {
            if (err) {
                res.status(404).render(__dirname + '/views/404.ejs');
            } else {
                let file = require(`./content/${materia}/${materia}.json`);
                res.render(__dirname + '/views/essay.ejs', {file: file});
            }
        });       
    }
});

// HTTP 404 Error (Not found)
app.use((req, res) => {
    res.status(404).render(__dirname + '/views/404.ejs');
});


// Start Express web server on http://localhost:8080/
app.listen(8080, () => {
    console.log("Server running on port 8080");
})