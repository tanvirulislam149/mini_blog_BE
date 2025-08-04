const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.hwqtyxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );

    console.log("db connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
