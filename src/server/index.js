const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
// Require the Aylien npm package

const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
const app = express()
app.use (express.json({
  extanded:false
}));
const fetch = require("node-fetch");

app.use(express.static('dist'))
app.use(bodyParser.json())
app.use(express.json({
extanded:false
}));
console.log(__dirname)

app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
app.get('/', function (req, res) {
  res.sendFile('dist/index.html')})
  app.post('/test', function (req, res) {
    res.send(mockAPIResponse)}) 
  var FormData = require('form-data');
// define formdata
var  formdata = new FormData();
formdata.append("key", "cea7ed1a6b7a932eeed4a1bb755841f3");

formdata.append("text", "success");
formdata.append("lang", "en"); // 2-letter code, like en es fr ...
const options={
  method :"post",
  body:formdata,
  
};

  // res.sendFile('dist/index.html')
 

const url=`https://api.meaningcloud.com/sentiment-2.1`

fetch(url, options)
.then(res => console.log(res))

  .catch(error => console.log('error', error));

  
   
