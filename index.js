const express = require("express");
const cors = require('cors');
require('dotenv').config()
const  {users} = require('./routes/users.js')

const app = express()
app.use(express.json())
app.use(cors());

const PORT = process.env.PORT


app.get('/',(req,res)=>{
    res.send("USERS APP")
})
app.use('/users', users);


app.get('*',(req,res)=>{
    res.status(404).send({
        status:404,
        success:false,
        message:"RESOURCE NOT FOUND",
        data:[]

    })
    
})


app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`))