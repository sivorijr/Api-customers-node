const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(require("./routes"));
app.use(cors());

mongoose.connect("mongodb+srv://root:root@cluster-l4tpr.gcp.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(process.env.PORT || 3434);
