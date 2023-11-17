require("dotenv").config();
const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  dbConnection,
};
