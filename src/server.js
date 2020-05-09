const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
});

// app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes"));

app.listen(process.env.PORT || 3434);
