const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://muzamilbaig24_db_user:ObbHNLLPJv6pHAJk@cluster0.1cedhqt.mongodb.net/",
    );

    console.log("DB Connected!");
  } catch (e) {
    console.log(`Error is ${e} !!!!!!!!!!!!!`);
  }
};

module.exports = connectDB;
