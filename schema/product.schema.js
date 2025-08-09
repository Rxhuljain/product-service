// schema/product.schema.js
const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
  sku: { type: String, required: true },
  color: String,
  price: Number,
  currency: String,
  stock: Number,
  images: [String],
  attributes: mongoose.Schema.Types.Mixed
});

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  brand: String,
  variants: [variantSchema],
  tags: [String],
  related_ids: [{ type: mongoose.Schema.Types.ObjectId }],
  created_by: String,
  updated_by: String,
  localized: {
    en: {
      name: String,
      description: String
    },
    fr: {
      name: String,
      description: String
    }
  },
  search_indexed: Boolean,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
