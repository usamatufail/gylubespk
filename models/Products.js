let mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "categories",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  tags: {
    type: Array,
  },
  files: {
    type: Array,
  },
  urlSlug: String,
});

module.exports = Products = mongoose.model("products", ProductsSchema);
