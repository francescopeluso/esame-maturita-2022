// Francesco Peluso - Year 2022
// High School Final Exam Website

const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/discipline/italiano', function(req, res) {
    res.sendFile(__dirname + '/discipline/italiano/index.html');
});

// Errore HTTP 404
app.use(function(req, res, next) {
    res.status(404).sendFile(__dirname + '/404.html');
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
})