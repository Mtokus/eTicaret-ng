const mongoose = require ("mongoose");
const userShema= new mongoose.Schema({
    _id:String,
    name: {
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    },
    isAdmin:Boolean,
})
const User= mongoose.model ( "user", userShema);
module.exports=User;