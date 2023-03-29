const mongoose =require('mongoose')


const { Schema } = mongoose;

const OrderSchema = new Schema({
    userId:{
        type:String,
        require:true
    },
    product:[
        {
            productId:{type:String},
            quantity:{type:Number,default:1}
        }
    ],

    address:{type:String, require:true,},
    amount:{type:Number, require:true,},
    status:{type:String, default:"pending", require:true},

    
},{timestamps:true})

export default  mongoose.models.Order || mongoose.model("Order",OrderSchema)
