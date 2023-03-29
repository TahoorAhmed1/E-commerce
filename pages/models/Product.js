const mongoose = require("mongoose");

const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    tittle: { type: String, require: true },
    description: { type: String, require: true },
    slug: { type: String, require: true, unique: true },
    category: { type: String },
    image: { type: String, require: true },
    color: { type: String },
    size: { type: String },
    price: { type: Number, require: true },
    avalibalQuantity: { type: Number, require: true },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
