
const express = require('express');

const PORT = 3000;

const app = express(); 

const generateMainPage = require('./page/index-get.js');

app.get('/', async(req, res) =>{
    const indexHTML = await generateMainPage();

    res.send(indexHTML);
})

app.use(express.static(__dirname + "/static"));

app.listen(PORT, ()=>{
    console.log('serveur démarré')
})
