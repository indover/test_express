const express = require("express");
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('hello world')
});

app.get('/api/test', (req, res) => {
    res.send('GET request to the all tests entities');
});

// GET request to test by id
app.get('/api/test/:testId', (req, res) => {
    res.send(req.params);
});

app.post('/api/test', (req, res) => {
   res.send('CREATE some test entity');
});

// UPDATE existing test entity (whole entity)
app.put('/api/test/:testId', (req, res) => {
   res.send(req.params);
});

// UPDATE one raw entity by id
app.patch('/api/test/:testId', (req, res) => {
   res.send(req.params);
});

// DELETE test entity by id
app.delete('/api/test/:testId', (req, res) => {
   res.send(req.params);
});