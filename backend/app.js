const express = require("express")
const mongoose = require("mongoose")
const userModule = require("./src/models/userModule")
const cors = require("cors")
const app = express();
require("dotenv").config();

app.use(cors())
app.use(express.json())


app.post('/user/auth/signup',async (req,res)=>{
    
    const {fullName,email,password} = req.body;
    console.log(req.body)
    
    try{
        const isUnique = await userModule.findOne({email})
        if(isUnique){
            res.status(400).send("User already exist")
            return ;
        }
        const newUser = new userModule({
            fullName,
            email,
            password
        })
        await newUser.save()
        res.status(201).send("User created Successfully")
    }
    catch(error){
        res.status(500).send("Server Error")
    }
})

app.post('/user/auth/signin',async (req,res)=>{

    const {email,password} = req.body;
    console.log(req.body)
    try{
        const userFound = await userModule.findOne({email})
        if(!userFound){
            res.status(400).send("Email is not registered");
            return ;
        }
        if(password == userFound.password) return res.status(200).send("Sign in Successfully")
        else return res.status(400).send("Password Incorrect")
    }
    catch(error){
        res.status(500).send("Server Error")
    }
})

mongoose.connect(process.env.DBURL)
.then((res,rej)=>{
    console.log("Connected Database");
    app.listen(process.env.PORT || 3000,()=>{
        console.log("Server run on PORT",process.env.PORT);
    })
})  
.catch((error)=>{
    console.log("Database connection failed ",error)
})  
