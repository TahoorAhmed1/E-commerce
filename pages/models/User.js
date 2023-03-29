const mongoose =require('mongoose')


const { Schema } = mongoose;

const UserSchema = new Schema({
  
   name:{
        type:String,
        require:true,
        min: 2,
        max: 24
    },
    email:{
       type:String,
       require:true,
       unique:true
       
    },
    password:{
       type:String,
       require:true,
       min: 6,
       max: 24
      
    },
    
    
    
},{timestamps:true})

export default mongoose.models.User || mongoose.model("User",UserSchema)