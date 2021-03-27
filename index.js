// Import dependencies
const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const app = express();

// Import Routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();
const PORT = process.env.PORT;

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log("ERR", err);
    } else {
      console.log("Connected to db");
    }
  }
);

// Middleware
app.use(express.json());

// Route Middleware
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(PORT, () => console.log(`Server up & running in port ${PORT}`));
