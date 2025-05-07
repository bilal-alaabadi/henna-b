const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { 
      type: {
        "500 جرام": { type: Number },
        "1 كيلو": { type: Number }
      },
      required: function() {
        return this.category === 'حناء بودر';
      }
    },
    regularPrice: { type: Number, required: function() {
      return this.category !== 'حناء بودر';
    }},
    image: { type: [String], required: true },
    rating: { type: Number, default: 0 },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
);

const Products = mongoose.model("Product", ProductSchema);

module.exports = Products;