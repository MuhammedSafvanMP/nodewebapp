const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const app = express();



// DB Connecting 

connectDB();


app.listen(process.env.PORT, () => console.log(`Server running on http://localhost:${process.env.PORT}`))

module.exports = app;