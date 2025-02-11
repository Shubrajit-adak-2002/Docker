const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.json([
        {
            id:1,
            name:"Suvo kumar",
            phone:"9875416474"
        },
        {
            id:2,
            name:"Khokon",
            phone:"6290132801"
        },
        {
            id:3,
            name:"Papan",
            phone:"6290353474"
        },
        {
            id:4,
            name:"Nuku",
            phone:"9836591330"
        },
    ])
})
app.listen(5001,()=>{
    console.log("app is running on 5001");
})