const express = require("express")
const mongoose = require("mongoose")
const userModule = require("./src/models/userModule")
const cors = require("cors")
const bcrypt = require("bcryptjs")
const app = express();
require("dotenv").config();

app.use(cors())
app.use(express.json())


app.post('/user/auth/signup',async (req,res)=>{
    
    const {fullName,email,password} = req.body || {};

    if(!fullName || !email || !password){
        return res.status(400).send("Full name, email and password are required")
    }

    try{
        const isUnique = await userModule.findOne({email})
        if(isUnique){
            res.status(400).send("User already exist")
            return ;
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new userModule({
            fullName,
            email,
            password : hashedPassword
        })
        await newUser.save()
        res.status(201).send("User created Successfully")
    }
    catch(error){
        res.status(500).send("Server Error")
    }
})

app.post('/user/auth/signin',async (req,res)=>{

    const {email,password} = req.body || {};

    if(!email || !password){
        return res.status(400).send("Email and password are required")
    }

    try{
        const userFound = await userModule.findOne({email})
        if(!userFound){
            res.status(400).send("Email is not registered");
            return ;
        }
        const isBcryptHash = /^\$2[aby]\$/.test(userFound.password || "")
        let isMatch
        if(isBcryptHash){
            isMatch = await bcrypt.compare(password, userFound.password)
        }else{
            // Accounts created before hashing was added still hold a plain-text
            // password: accept it once and upgrade it to a bcrypt hash.
            isMatch = password === userFound.password
            if(isMatch){
                userFound.password = await bcrypt.hash(password, 10)
                await userFound.save()
            }
        }
        if(isMatch) return res.status(200).send("Sign in Successfully")
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
