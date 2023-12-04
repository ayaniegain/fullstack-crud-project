const mongoose = require("mongoose");
const colors = require("colors");

///connect db from
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_CONNECT || "mongodb+srv://ayaniegain:ayancodejs@cluster0.xuaxvv3.mongodb.net/task");
    console.log(
      `Connected to mongo db ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Error in mongo db ${error}.bgRed`);
  }
};

module.exports = connectDB;