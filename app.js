const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(express.static());

app.use(bodyParser.urlencoded({
    extended: true
}));

const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});