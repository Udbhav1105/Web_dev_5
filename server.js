const express=require("express");

const app=express();

app.get("/",(req,res)=>{
    res.send("this is first server");
})

app.get("/about",(req,res)=>{
    const students=[
        {
            id:1,
            name:"sanskar",
            class:"12"
        },
        {
            id:2,
            name:"vaibhav",
            class:"12"
        },
        {
            id:3,
            name:"yash",
            class:"12"
        },
        {
            id:4,
            name:"abc",
            class:"12"
        },
        {
            id:5,
            name:"def",
            class:"12"
        }
    ]
    res.json(students);
})

app.get("/contact",(req,res)=>{
    res.send("Contact at:<h4>9452XXXXXXX</h4>");
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});