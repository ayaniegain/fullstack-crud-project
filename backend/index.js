const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");
const cors =require("cors")
const taskRoutes  = require("./routes/taskRoute");

//config env
dotenv.config();

// database config
connectDB();

//rest object
const app = express();

// //middleware
app.use(express.json());
app.use(cors())

// //Routes 
app.use("/api/v1/task",taskRoutes );
//port
const PORT = process.env.PORT ||8080 ;



//run listen
app.listen(8080, () => {
  console.log(`listen PORT ${process.env.DEV_MODE} no ${PORT}`.bgYellow.bold);
});

