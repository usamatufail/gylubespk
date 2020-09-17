const express = require("express");
const router = express.Router();
const Categories = require("../../models/Categories");
const Products = require("../../models/Products");
const multer = require("multer");
const cloudinary = require("cloudinary");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
require("../../cloudinaryConfig");

var upload = multer({ storage: multer.diskStorage({}) }).single("file");

//@route   POST api/categories/add
//@desc    Add Categories
//@access  Private
router.post("/add", auth, upload, async (req, res) => {
  try {
    const { title, description, file, urlSlug } = req.body;
    const newCategory = {
      title,
      description,
      urlSlug,
      file,
    };
    const addCategory = new Categories(newCategory);
    await addCategory.save();
    res.json(addCategory);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route   GET api/categories/all
//@desc    Get all categories
//@access  Public
router.get("/all", async (req, res) => {
  try {
    const categories = await Categories.find({}).sort("_id");
    res.json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//@route   GET api/categories/urlSlug
//@desc    Get category by url
//@access  Public
router.get("/getByUrl/:category", async (req, res) => {
  try {
    const requiredCategory = await Categories.findOne({
      urlSlug: req.params.category,
    });
    res.json(requiredCategory);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//@route   POST api/categories/edit/:id
//@desc    Update Category
//@access  Private
router.post("/edit/:id", auth, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }
  const { title, description, file, urlSlug } = req.body;

  //Build Category Object
  const categoryFields = {};
  if (req.params.id) {
    categoryFields._id = req.params.id;
  }
  if (title) {
    categoryFields.title = title;
  }
  if (urlSlug) {
    categoryFields.urlSlug = urlSlug;
  }
  if (file) {
    categoryFields.file = file;
  }
  if (description) {
    categoryFields.description = description;
  }
  try {
    let category = await Categories.findById({ _id: req.params.id });
    if (category) {
      // Update
      category = await Categories.findOneAndUpdate(
        { _id: req.params.id },
        { $set: categoryFields },
        { new: true }
      );
      return res.json(category);
    }
    return res.status(404).json({ msg: "No Category Found" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route   DELETE api/categories/:catId
//@desc    DELETE a category
//@access  Public
router.delete("/delete/:catId", auth, async (req, res) => {
  try {
    const Id = req.params.catId;
    //delete category
    await Categories.findByIdAndRemove(Id);
    //delete products of category
    await Products.deleteMany({ category: Id });
    res.json({ msg: "category deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//@route   POST api/categories/uploadImage
//@desc    Upload image to cloudinary
//@access  Private
router.post("/uploadImage", upload, async (req, res) => {
  const result = await cloudinary.v2.uploader.upload(req.file.path);
  if (result) {
    res.json(result.secure_url);
  } else {
    res.json("Error");
  }
});

module.exports = router;
