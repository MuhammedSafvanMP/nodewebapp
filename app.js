const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
require("dotenv").config();
const app = express();

const userRouter = require("./routes/userRouter");



// middlewares

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// views settings

app.set("view engine", "ejs");
app.set("views", [path.join(__dirname,'views/user'), path.join(__dirname, 'views/admin')]);
app.use(express.static(path.join(__dirname, 'public')));


// API end points

app.use("/", userRouter);

// DB Connecting 

connectDB();

// port 

const PORT = process.env.PORT || 6000


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))

module.exports = app;