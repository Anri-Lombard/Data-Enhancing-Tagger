const express = require("express");

const PORT = process.env.PORT || 8000;

const app = express();

const router = require("./router");

// Use mongoose to connect nodejs and mongodb
const mongoose = require("mongoose");

const dotenv = require("dotenv");

const cors = require("cors");


dotenv.config();

app.listen(PORT, async () => {
  console.log(`server up at http://localhost:${PORT}/`);
});


mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
      console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use(router);

