import React from 'react'
import { Link,NavLink } from 'react-router-dom'

function Navigate() {
  return (
         <div className=" m-4 p-4 bg-center ">
        <NavLink   to="/" className="mx-4   px-4 py-6  bg-green-300  hover:bg-red-200 ">
         Add Task 👆
        </NavLink>
        <NavLink
          
          to="/tasklist"
          className="    px-4 py-6 border-b   my-2 bg-green-300  border- cursor-pointer hover:bg-red-200"
        >
         Task list 👆
        </NavLink>
    </div>
  )
}

export default Navigate