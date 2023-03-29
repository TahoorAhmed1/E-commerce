import Product from "../models/Product";
import connectDb from "../../middleware/mongoose";


const handler = async (req, res) => {
    try{
        if (req.method == "POST") {
            console.log(req.body);
            for (let i = 0; i < req.body.length; i++) {
                let product = await Product.findByIdAndUpdate(req.body[i]._id,req.body[i])
            
                res.status(200).json({success:true})
            }
            console.log("update");
        } 

               
    }catch (err) {
        console.log("err");
    }

}
export default connectDb(handler)