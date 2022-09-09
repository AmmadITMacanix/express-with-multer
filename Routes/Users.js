import express from "express"
import mongoose from "mongoose";
import multer from 'multer'
const router =express()
// configure multer
const upload = multer({dest:'Uploads/'})
router.set('Access-Control-Allow-Origin', '*');
router.set('Access-Control-Allow-Methods', 'POST,GET,DELETE,PUT');
// mongo db configration

const UserDataSchema= new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    skill:{
        type:String,
        required:true
    
    },
    img:{
        type:{},
        required:true
    },
    des:{
        type:String,
        required:true
    }
})

const userdata =mongoose.model("usersdatas", UserDataSchema );
// handling GET Request
router.get("/",(req,res)=>{

    res.set('Access-Control-Allow-Origin', '*');

    res.send('TO get User data see /users route')
})
router.get("/users",async(req,res)=>{
res.set('Access-Control-Allow-Origin', '*');


 userdata.find().then(data=>res.send(data)).catch(err=>console.log(err))
        // res.send(data)
    
 
})
// Handling POST Request
router.post("/users",upload.single('img'),async(req,res)=>{





    let new_user= new userdata({
        name:req.body.name,
        skill:req.body.skill,
        img:req.file,
        des:req.body.des
    })
    try{

        await new_user.save()
        res.send(new_user)
    }
    catch(err){
        console.log(err);
    }

})







export default router