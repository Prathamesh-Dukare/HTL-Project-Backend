const express = require('express');
const app = express();
let host = 'localhost';
let port = 3002;
const facts  = require('./facts.js');


app.get('/random',(req,res)=>{
    res.send(facts.randomFact());
})

console.log(facts.randomFact());


app.listen(port,()=>{
    console.log(`See the app on : http://${host}:${port}`);
})