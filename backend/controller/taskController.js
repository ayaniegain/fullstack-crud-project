const taskModel = require("../models/taskModel");

const createTaskController = async (req, res) => {
  try {
    const { title,desc,date,status } = req.body;
    if (!title) {
      return res.status(401).send({ message: "title is required " });
    }
    if (title=="") {
      return res.status(401).send({ message: "title is null " });
    }
    if (!desc) {
      return res.status(401).send({ message: "desc is required " });
    }
    if (desc=="") {
      return res.status(401).send({ message: "desc is null " });
    }
    if (!date) {
      return res.status(401).send({ message: "date is required " });
    }
    if (date=="") {
      return res.status(401).send({ message: "date is null " });
    }
    // const existingCategory = await taskModel.findOne({ name });

    //existing user
    // if (existingCategory) {
    //   return res.status(200).send({
    //     success: true,
    //     message: "Already Category exists",
    //   });
    // }

    const task = await new taskModel({
      title,
      desc,
      date,
      status
    }).save();

    // if(category.name==""){
    //   res.status(500).send({
    //     success: false,
    //     error,
    //     message: "category name null",
    //   });
    // }

    // console.log(task)
    res.status(200).send({
      success: true,
      message: "Task created",
      task,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in task",
    });
  }
};

// update status

const updateStatusController = async (req, res) => {
  try {
  const {id}=req.params
    const { status } = req.body;

    // console.log("my status",status)

    
   
    const updateData = {status}; 

    const task = await taskModel.findByIdAndUpdate(
      id,updateData
    );
    res.status(200).send({
      success: true,
      message: "updated task successfully ",
      task,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in Update task",
    });
  }
};






// update task
const updateTaskController = async (req, res) => {
  try {
  const {id}=req.params
    const { title,desc,date } = req.body;
   
    const updateData = { 
      title:title, 
      desc: desc, 
      date: date, 
  }; 

    const task = await taskModel.findByIdAndUpdate(
      id,updateData
    );
    res.status(200).send({
      success: true,
      message: "updated task successfully ",
      task,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in Update task",
    });
  }
};

//getAll task

const getAllTaskController = async (req, res) => {
  try {
    const task = await taskModel.find();
    res.status(200).send({
      success: true,
      message: "getAll task successfully ",
      task,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in allgetall task",
    });
  }
};



// //delete task

const deleteTaskController = async (req, res) => {
  const {id}=req.params

  console.log(id)
  try {
    const task = await taskModel.findByIdAndDelete(id);
    if (!task) {
      res.status(200).send({
        success: true,
        message: "delete task not exists  ",
        task,
      });
      
    }else{

      res.status(200).send({
        success: true,
        message: "delete task successfully ",
        task,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in delete task",
    });
  }
};



module.exports = {
  createTaskController,
  updateTaskController,
  getAllTaskController,
  updateStatusController,
  deleteTaskController
};