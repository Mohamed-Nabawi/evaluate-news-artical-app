const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
var path = require('path')
// Require the Aylien npm package

const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()
app.use(express.json({
  extanded: false
}));
app.use(cors())

const fetch = require("node-fetch");
path.resolve(__dirname, /*path to file or directory*/)
app.use(express.static('dist'))
/*
app.use(bodyParser.json())
app.use(express.json({
  extanded: false
}));
*/
app.use(express.static(path.resolve(__dirname, 'dist')))

console.log(__dirname)

app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
})

app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
})
app.post('/test', function (req, res) {
  console.log(req.body)

  var FormData = require('form-data');
  // define formdata
  var formdata = new FormData();
  formdata.append("key", process.env["API_KEY"]);
  formdata.append("url", req.body.formurl);
  formdata.append("lang", "en"); // 2-letter code, like en es fr ...
  
  const options = {
    method: "POST",
    body: formdata,
  };

  // res.sendFile('dist/index.html')


  const url = `https://api.meaningcloud.com/sentiment-2.1`

  fetch(url, options)
    .then(res => res.json())
    .then(result => {
      console.log('API Result: ', result)
      res.send(result)
    })

    .catch(error => console.log('error', error));
})


