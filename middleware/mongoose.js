
import mongoose from "mongoose";
mongoose.set('strictQuery', true);

const connectDb= handler => async(req,res)=>{
 try{
   if(mongoose.connections[0].readyState){
       return handler(req,res)
   }
   await mongoose.connect(process.env.MONGO_URI)
   console.log("connecter");
   return handler(req,res)
}catch(err){
    console.log(err);
}
    
}

export default connectDb; 