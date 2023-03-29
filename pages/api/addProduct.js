import Product from "../models/Product";
import connectDb from "../../middleware/mongoose";


const handler = async (req, res) => {
    try{
        if (req.method == "POST") {
            for (let i = 0; i < req.body.length; i++) {
                let product = new Product({
                    tittle: req.body[i].tittle,
                    description: req.body[i].description,
                    slug: req.body[i].slug,
                    category: req.body[i].category,
                    image: req.body[i].image,
                    color: req.body[i].color,
                    size: req.body[i].size,
                    price:req.body[i].price,
                    avalibalQuantity: req.body[i].avalibalQuantity,
                })
                await product.save()
                res.status(200).json({success:true,product:product}) // it show only one product
            }
            console.log("data store");
        } 


    }catch (err) {
        console.log(err);
    }

}

export default connectDb(handler)