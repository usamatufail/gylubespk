const express = require("express");
const router = express.Router();
const Categories = require("../../models/Categories");
const Products = require("../../models/Products");
const multer = require("multer");
const cloudinary = require("cloudinary");
const { check, validationResult } = require("express-validator");
require("../../cloudinaryConfig");

var upload = multer({ storage: multer.diskStorage({}) }).single("file");
//@route   POST api/products/add
//@desc    Add Products
//@access  Public
router.post("/add", async (req, res) => {
  try {
    const { title, description, tags, urlSlug, category, files } = req.body;

    const newProduct = {
      title,
      description,
      tags,
      urlSlug,
      category,
      files,
    };
    const addProduct = new Products(newProduct);
    await addProduct.save();
    res.json(addProduct);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route   POST api/products/edit/:id
//@desc    Update product
//@access  Public
router.post(
  "/edit/:id",
  [[check("title", "please enter pattern title").not().isEmpty()]],
  async (req, res) => {
    //checking for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    //getting fields from body and files
    const { title, description, tags, category, urlSlug, files } = req.body;
    //Build Product Object
    const productFields = {};
    productFields._id = req.params.id;
    productFields.title = title;
    productFields.description = description;
    productFields.tags = tags;
    productFields.category = category;
    productFields.urlSlug = urlSlug;
    productFields.files = files;
    // try catch block to catch errors effectively
    try {
      let newProduct = await Products.findById({ _id: req.params.id });
      if (newProduct) {
        //Update Pattern in Database
        newProduct = await Products.findOneAndUpdate(
          { _id: req.params.id },
          { $set: productFields },
          { new: true }
        );
        return res.json(newProduct);
      } else {
        //sending error if there is no corresponding pattern to given id
        return res.status(404).json({ msg: "No Patterns Found" });
      }
    } catch (err) {
      //Code to check if there are errors
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route   GET api/products/all
//@desc    Get all products
//@access  Public
router.get("/all", async (req, res) => {
  try {
    const allProducts = await Products.find().sort({ title: "asc" });
    res.json(allProducts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route   GET api/products/all
//@desc    Get all products populated
//@access  Public
router.get("/allPopulated", async (req, res) => {
  try {
    const allProducts = await Products.find()
      .populate("category")
      .sort({ title: "asc" });
    res.json(allProducts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route   DELETE api/product/current/:productId
//@desc    DELETE product
//@access  Public
router.delete("/delete/:productId", async (req, res) => {
  try {
    const id = req.params.productId;
    //remove pattern
    const product = await Products.findByIdAndRemove(id);
    if (!product) {
      res.json({ msg: "no product found" });
    }
    res.json({ msg: "product deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

//@route   POST api/products/uploadImage
//@desc    Upload image to cloudinary
//@access  Public
router.post("/uploadImage", upload, async (req, res) => {
  const result = await cloudinary.v2.uploader.upload(req.file.path);
  if (result) {
    res.json(result.secure_url);
  } else {
    res.json("Error");
  }
});

module.exports = router;
