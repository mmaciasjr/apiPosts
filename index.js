const express = require('express');
const app = express();
const users = require('./posts.json')

app.get('/', function (req, res) {
    res.send('Posts.json assignment');
});

app.post('/', function (req, res) {
    res.send('This is a post request')
})

app.get('/users', (req, response) => {
return res.json({ users })
})

app.listen(3000, function () {
    console.log('Server running on port 3000')
})