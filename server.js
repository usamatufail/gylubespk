const express = require("express");
const cors = require("cors");
const compression = require("compression");
const path = require("path");
var bodyParser = require("body-parser");
const passport = require("passport");
const rendertron = require("rendertron-middleware");
const connectDB = require("./config/db");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
//Connect Database
connectDB();
//Compression Middleware
app.use(compression());
// Cors Middleware
app.use(cors());
// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//All the Routes
app.use("/api/categories", require("./routes/api/categories"));
app.use("/api/products", require("./routes/api/products"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/users"));
// Passport middleware
app.use(passport.initialize());
// require("./config/passport")(passport);
//Prerendring
app.use(
  rendertron.makeMiddleware({
    proxyUrl: "http://maxxis-rendertron.herokuapp.com/render",
    userAgentPattern: /whatsapp|googlebot|twitterbot|baiduspider|bingbot|yandexbot|duckduckbot|slurp|facebookexternalhit|linkedinbot|embedly|pinterest|slackbot|vkShare|facebot|outbrain|W3C_Validator/i,
  })
);
// Caching build data
app.use(
  express.static(path.join(__dirname, "client", "build"), {
    index: false,
  })
);
//All the static content
//Serving client build
app.get("*", async (req, res) => {
  res.set("Cache-Control", "public, max-age=129600, s-maxage=129600");
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  return;
});
// //sitemap.xml route
// app.get("/sitemap.xml", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client", "build", "sitemap.xml"));
// });
// Setting up service worker
app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "service-worker.js"));
});
//app listening on given port
app.listen(PORT, () =>
  console.info(`Server is up and running on port ${PORT}`)
);
