import  express  from "express";

const app= express();
const port=3000;

app.get("/",(req,res) =>{

    const today=new Date("");
    const day= today.getDay();
    
    let type="a weekDay";
    let adv = "its time to work hard";

    if(day===0|| day===6){
         type="the weekEnd";
         adv = "its time to relax";
    }


    res.render("index.ejs" , {
        dayType: type,
        advice: adv
    })
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})