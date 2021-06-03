const express = require('express');
const app = express();
const posts = require('./posts.json');
const fs = require('fs');
//route created
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('Whats up world?');
})
//get request
app.get('/books', function (req, res) {
    res.send('There are hella books in the store. Yee!!!');
})

//creating post route
app.post('/', function (req, res) {
    res.send('this is a post request');
})
//fetch all posts
app.get('/posts', (req, res) => {
return res.json({ posts })
});
//create new post from clients request in order to save new user to existing db.
app.post('/posts', (req, res) => {
console.log(req.body.newPost);

posts.push(req.body.newPost);

let stringedData = JSON.stringify(posts, null, 2);
fs.writeFile('users.json', stringedData, function (err) {
    if (err ){
        return res.status(500).json({message: 'err'})
    }
    })

    return res.status(200).json({ message: "New post has been created"})
})

//
app.listen(3000, function(){
    console.log('Server running on port 3000')
})
