const { createTaskController,updateTaskController,getAllTaskController,deleteTaskController,updateStatusController} =require ("../controller/taskController")

const express = require("express")
const router= express.Router()

//routes create 
router.post("/create-task", createTaskController)
//routes update
router.put("/update-task/:id", updateTaskController)
//update status
router.put("/update-status/:id", updateStatusController)
// //routes getall 
router.get("/getall-task", getAllTaskController)
// //routes delete  
router.delete("/delete-task/:id", deleteTaskController)



module.exports= router