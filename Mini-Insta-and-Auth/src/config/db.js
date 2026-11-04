const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://muzamilbaig24_db_user:ObbHNLLPJv6pHAJk@cluster0.1cedhqt.mongodb.net/",
    );

    console.log("Connected DB!");
  } catch (e) {
    console.log("please solve this is error", e);
  }
};

module.exports = connectDb;
