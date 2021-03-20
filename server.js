// import library express
const express = require('express'); 

//create express instance
const app = express();
const port = 8002;


//create router
app.get('/' , function(req,res){
    res.send('Hello World');         // request
})   // router

app.use("/test",(req,res)=>{
    res.send('Hello World');
})

app.get("/info",(req,res)=>{
    res.json({
        status: 'success',
        message: 'complete',
        appName: 'Hello world',
    })
})


//http module port
app.listen(port,()=>{
    console.log('Hello')
});