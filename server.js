const express = require('express');
const db = require("./config/dbConnection")
const app=express();


db(); //Connection to database




const port = process.env.PORT || 3000;  //Setting Up PORT

//ROutes
app.use("/new",require("./routes/newLicense"));
app.use("/check",require("./routes/checkLicense"))


//To check if Server is alive
app.get("/",(req,res)=>{
  res.send({message : "Server is Active"})
})

app.listen(port, ()=>{
  console.log(`Server running on port : ${port}`);
})
