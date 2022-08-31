
const express = require('express');
//const favicon = require('serve-favicon');


const app = express(); 
const port = process.env.PORT || 3000

const generateMainPage = require('./page/index-get.js');

app.get('/', async(req, res) =>{
    const indexHTML = await generateMainPage();

    res.send(indexHTML);
})

// app.use(favicon(__dirname + '/pictures/favicon.ico'));
app.use(express.static(__dirname + "/static"));

app.listen(process.env.PORT || 3000)