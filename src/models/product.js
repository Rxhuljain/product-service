const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema({
  sku: { type: String, required: true, unique: true },
  color: String,
  price: { type: Number, required: true, min: 0 },
  currency: { type: String, enum: ["USD", "INR"], required: true },
  stock: { type: Number, default: 0, min: 0 },
  images: [String],
  attributes: { type: Map, of: mongoose.Schema.Types.Mixed }
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: String,
  brand: String,
  variants: [variantSchema],
  tags: [String],
  created_by: String,
  updated_by: String,
  localized: {
    en: { name: String, description: String },
    fr: { name: String, description: String }
  },
  search_indexed: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
