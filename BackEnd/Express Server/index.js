import  express  from "express";
const app = express();
const port = 3000;

app.get("/",(req,res) =>{
    res.send("<h1>Hello</h1>")
})

app.post("/register",(req,res) =>{
    res.sendStatus(201);
})

app.put("/user/aman",(req,res) =>{
    res.sendStatus(200);
})

app.patch("/user/aman",(req,res) =>{
    res.sendStatus(200);
})

app.delete("/user/aman",(req,res) =>{
    res.sendStatus(200);
})

app.listen(port,() =>{
    console.log(`Server Running on ${port}`)
})