const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
// Require the Aylien npm package
var aylien = require("aylien_textapi");
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
const app = express()
const FormData = require('form-data');
const fetch = require("node-fetch");

app.use(express.static('dist'))
app.use(bodyParser.json())
app.use(express.json({
extanded:false
}));
console.log(__dirname)
const form = new FormData();
form.append('a', 1);
app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

const data = { username: 'example' };

fetch('https://api.meaningcloud.com/sentiment-2.1', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
// You could call it aylienapi, or anything else
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
 })
