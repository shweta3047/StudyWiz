
const mongoose=require("mongoose");
const passportLocalMongoose=require("passport-local-mongoose");

var userSchema=new mongoose.Schema({
    
    username:String,
    id : String,
    email:String,
    token:String,
    image : { 
        type : String ,
        default: "https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder.jpg"
    },
    date: {
        type: Date,
        default: Date.now
    }   

})

userSchema.plugin(passportLocalMongoose);

module.exports=mongoose.model("fbUser",userSchema);
