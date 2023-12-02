import React, { useState } from 'react'
import Datepicker from "react-tailwindcss-datepicker"; 

function InputField() {
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [dueDate, setDueDate] = useState({ 
  startDate: new Date(), 
  endDate: new Date().setMonth(11) 
  })

let handleSubmit=(e)=>{
  e.preventDefault()
  
  
  console.log(title);
  console.log(description);
  console.log(dueDate.startDate);


}

  return (
    <div>
        <h1 className='text-3xl text-center '>Task Manager</h1>
        
<form onSubmit={handleSubmit}>
  <div className="grid gap-6 mb-6 md:grid-row-2">
    <div>
      <label htmlFor="first_name" className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="write text" required />
    </div>
<div>
  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
  <input type="text" id="message" value={description} onChange={(e)=>setDescription(e.target.value)}  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."  />
</div>

 {/* <div>
      <label htmlFor="first_name" className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white">Due Date</label>
      <input type="number" value={dueDate} onChange={(e)=>setDueDate(e.target.value)} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
  </div>  */}
<div>

  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Due Date</label>
<Datepicker 
 className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
value={dueDate} 
onChange={(e)=>setDueDate(e)} 
/>
</div>

    </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
    </div>
  )
}

export default InputField