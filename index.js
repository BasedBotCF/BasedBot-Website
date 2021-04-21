const express = require('express')
const app = express()
const fs = require('fs')
var favicon = require('serve-favicon')
var path = require('path');
const port = 5000

app.use('/public', express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + '/css'));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))

app.get('', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/checkhealth', function(req, res) {
  res.sendFile(path.join(__dirname + '/checkhealth.html'));
});
app.get('/commands', function(req, res) {
  res.sendFile(path.join(__dirname + '/commands.html'));
});
app.get('/favicon.ico', function(req, res) {
  res.sendFile(path.join(__dirname + '/favicon.ico'));
});




app.use((req, res,next)=>{
  res.status(404).send('<h1> Not a real page dumbass </h1>');
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
