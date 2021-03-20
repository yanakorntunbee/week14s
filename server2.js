const express = require('express');
const app = express();
const port = 8000;

app.get('/',function(req,res){
    res.send('Hello World');
})

app.get('/hello',function(req,res){
    res.send('Listen to hello');
})

app.get('/bye',function(req,res){
    res.send('Listen to bye');
})

app.listen(port,()=>{
    console.log('Hello server2');
})