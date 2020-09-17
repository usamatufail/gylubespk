let mongoose = require("mongoose");
let CategoriesSchema = mongoose.Schema({
  title: String,
  description: String,
  file: String,
  urlSlug: String,
});

module.exports = Categories = mongoose.model("categories", CategoriesSchema);
