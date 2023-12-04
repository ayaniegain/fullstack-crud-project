import React, { useEffect, useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Datepicker from "react-tailwindcss-datepicker"; 



function TaskList() {
  let [title, setTitle] = useState("");
  let [desc, setDescription] = useState("");
  let [dueDate, setDueDate] = useState("");
  let [eid, setId] = useState("");
  let [check, setCheck] = useState(false);

  const [data, setData] = useState([]);
  const [editDataval,setEditdata]=useState(
    {
          title:"",
          desc:"",
          date:""
      }
  )
  const [show, setShow] = useState(false);
 

  const handleClose = () =>{
    setShow(false);
  }
    



  let updatedata={
    title,
    desc,
    dueDate
}


  //get all task
  async function getAllTask() {
    try {
      let res = await axios.get(
        `http://localhost:8080/api/v1/task/getall-task`
      );

      setData(res.data.task);
    } catch (error) {
      toast.error("something went wrong in getting task");
      console.log(error);
    }
  }

  if (!data) null;

  //delete task
  async function deleteTask(id) {
    console.log(id);
    try {
      let res = await axios.delete(
        `http://localhost:8080/api/v1/task/delete-task/${id}`
      );

      console.log(res);
      if (res.data.success) {
        getAllTask();
      }
    } catch (error) {
      toast.error("something went wrong in getting task");
      console.log(error);
    }
  }
  
  useEffect(() => {
    getAllTask();
    
    
  }, []);


  //call the getall task
  useEffect(() => {
    getAllTask();
    
    
  }, []);

//edit task
  async function handleShow(id,editdata) {
    // console.log(editdata);
    setId(id)
    setShow(true)

    setEditdata(editdata)
  }
  // console.log(editDataval);
  

 let handleEditSubmit=async(e)=>{
    // e.preventDefault()
console.log("eid");
    try {
      let res = await axios.put(
        `http://localhost:8080/api/v1/task/update-task/${eid}`,updatedata
      );

      // console.log(res);
      if (res.data.success) {
        getAllTask();
      }
    } catch (error) {
      // toast.error("something went wrong in getting task");
      console.log(error);
    }

    setTitle('')
    setDescription('')
    setDueDate('')


  }
  let updateStatus={
    "status":"completed ✔",
}
  
  let handleCheck=async(id)=>{

    // console.log(id);


    try {
      let res = await axios.put(`http://localhost:8080/api/v1/task/update-status/${id}`,updateStatus);

      // console.log(res);
      if (res.data.success) {
        getAllTask();
      }
    } catch (error) {
      // toast.error("something went wrong in getting task");
      console.log(error);
    }



    // setCheck(!check)

  }




  return (
    <>
{/* 
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>

<form >
   <div>
    <input type="text" value={title }  
    placeholder="add title"
    
                onChange={(e) => setTitle(e.target.value)}
    
    />
    <input type="text" value={desc} 
    placeholder="add description"

                onChange={(e) => setDescription(e.target.value)}
    
    />

    <input type="text" value={dueDate} 
    placeholder="02/12/23"

                onChange={(e) => setDueDate(e.target.value)}
    
    />
  </div> 
</form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
</Modal> */}

      <h2>
        
        {check}
        </h2>
<Modal show={show} onHide={handleClose} className="modal">
  <Modal.Header closeButton className="modal-header">
    {/* Your header content */}
  </Modal.Header>
  <Modal.Body className="modal-body">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <input
          type="text"
          value={title}
          placeholder="Add title"
          className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={desc}
          placeholder="Add description"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={dueDate}
          placeholder="02/12/23"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
    </form>
  </Modal.Body>
  <Modal.Footer className="modal-footer">
    <Button variant="secondary" onClick={handleClose} className=" mx-4 bg-blue-500 text-white px-2 py-1 rounded mr-2">
      Close
    </Button>
    <Button variant="primary"  className="bg-red-500 text-white px-2 py-1 rounded" onClick={handleEditSubmit}>
      Save Changes
    </Button>
  </Modal.Footer>
</Modal>




      <div className="bg-gray-100 p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Todo List</h1>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Title</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.map((e, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">
                    <div>
                      <input
                        type="checkbox"
                        id="task1Status"
                        className="mr-2"
                        onClick={()=>handleCheck(e._id)}
                          disabled={check}

                        />
                      <label htmlFor="task1Status" className="font-bold text-blue-500">{e.title}</label>
                    </div>
                    <div className="text-green-600 font-bold">{e.desc}</div>
                    <div className=" text-red-500">{e.date}</div>
                  </td>
                  {/* <td className="py-2 px-4 border-b">{e.status}</td> */}
                  <td className="py-2 px-4 border-b">{e.status}</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                      onClick={() => handleShow(e._id,e)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => deleteTask(e._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </>
  );
}

export default TaskList;
