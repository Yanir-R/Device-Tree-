var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var CORSMiddleware = require("./middlewares/CORSMiddleware");

//Import Routes
var indexRouter = require("./routes/index");
var treeRouter = require("./routes/tree");
const { Console } = require("console");

// return instance of the app
const app = express();

// setting up the middlewares
app.use(logger("dev"));
app.use("/api", CORSMiddleware);``
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// setting the routes midllewares
app.use("/", indexRouter);
app.use("/api/v1.0/tree", treeRouter);

module.exports = app;