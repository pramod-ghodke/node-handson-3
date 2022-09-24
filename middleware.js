

const express = require ("express");

const app = express();
const port = 4000;


const middleware1 = (req, res, next) => {
    console.log("Thise is Middleware 1");
    next();
}

const middleware2 = (req,res,next) => {
    console.log("Middleware 2 is used globally");
    next();
}

app.use(middleware2);


app.get("/page1",middleware1,(req,res)=>{
    res.send("<h1>page 1 with middleware1</h1>")
})
app.get("/page2",middleware1,(req,res)=>{
    res.send("<h1> Second Page middleware-2</h1>")
})



app.get("/",(req,res)=>{
    res.send("<h1>Thise is main page with middleware2</h1>")
})
app.get("/page3",(req,res)=>{
    res.send("<h1> Third with Middleware2</h1>")
})
app.get("/page4",(req,res)=>{
    res.send("<h1>Fourth with Middleware2</h1>")
})
app.get("/page5",(req,res)=>{
    res.send("<h1>Fifth with Middleware2</h1>")
})

app.listen(port,()=>{
    console.log(`server running at port $(port)`);
})
