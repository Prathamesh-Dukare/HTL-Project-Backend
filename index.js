const express = require('express');
const { json } = require('express/lib/response');
const app = express();
let host = 'localhost';
let port = 3002;
const facts  = require('./facts.js');


app.get('/random',(req,res)=>{
    let randomFact = facts.randomFact()
    res.json(randomFact)
})

console.log(facts.randomFact());


app.listen(port,()=>{
    console.log(`See the app on : http://${host}:${port}`);
})