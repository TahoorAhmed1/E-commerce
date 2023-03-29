import Product from "../models/Product";
import connectDb from "../../middleware/mongoose";


const handler= async(req, res)=> {
   let product= await Product.find()

   let shirt={}
   for(let item of product){
      if(item.tittle in shirt){
         if(!shirt[item.tittle].color.includes(item.color) && item.avalibalQuantity >0){
          shirt[item.tittle].color.push(item.color)
         }
         if(!shirt[item.tittle].size.includes(item.size) && item.avalibalQuantity >0){
          shirt[item.tittle].size.push(item.size)
         }
   }
   else{
      shirt[item.tittle]=JSON.parse(JSON.stringify(item))
      if(item.avalibalQuantity  > 0){
         shirt[item.tittle].color=[item.color]
         shirt[item.tittle].size=[item.size]
      }
      }
   }
 

   res.status(200).json({success:true,shirt})
  }
  
  export default connectDb(handler)
